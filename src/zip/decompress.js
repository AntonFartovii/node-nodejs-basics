import {stdout} from 'node:process';
import {createReadStream, createWriteStream} from 'fs';
import {createUnzip} from 'zlib';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

const decompress = async () => {
    const readStream = createReadStream(getFilePath(url, 'files/archive.gz'));
    const writeStream = createWriteStream(getFilePath(url, 'files/fileToCompress.txt'));
    const gzip = createUnzip();
    readStream.pipe(gzip).pipe(writeStream);
    stdout.write('Decompress done!\n');
};

await decompress();

// npm run zip:decompress

// decompress.js - implement function that decompresses archive.gz
// back to the fileToCompress.txt with same content as before
// compression using zlib and Streams API