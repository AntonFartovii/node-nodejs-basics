import {stdout} from 'node:process';
import {createReadStream,createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

const compress = async () => {
    const readStream = createReadStream(getFilePath(url, 'files/fileToCompress.txt'));
    const writeStream = createWriteStream(getFilePath(url, 'files/archive.gz'));
    const gzip = createGzip();
    readStream.pipe(gzip).pipe(writeStream);
    stdout.write('Compress done!\n');
};

await compress();

// npm run zip:compress

// compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API