import {createReadStream} from 'fs';
import {stdout} from 'node:process';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

const read = async () => {
    const filepath = getFilePath(url, 'files/fileToRead.txt');
    const readStream = createReadStream(filepath, 'utf-8');
    readStream.pipe(stdout);
};

await read();

// npm run streams:read


// read.js - implement function that reads file fileToRead.txt
// content using Readable Stream and prints it's content into process.stdout
