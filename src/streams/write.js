import {createWriteStream} from 'fs';
import {stdin, stdout} from 'node:process';
import {getFilePath} from '../utils.js';

const url = import.meta.url;

const write = async () => {
    const filepath = getFilePath(url, 'files/fileToWrite.txt');
    const writeStream = createWriteStream(filepath);
    stdin.pipe(writeStream);
    stdout.write('Write anything to file fileToWrite.txt .....\n');
};

await write();

// npm run streams:write

// write.js - implement function that writes process.stdin data
// into file fileToWrite.txt content using Writable Stream