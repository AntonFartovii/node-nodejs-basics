import { createReadStream } from 'fs';
import { getFilePath } from '../utils.js';
import { stdout } from 'node:process';
const url = import.meta.url;

const read = async () => {
  const error = new Error('FS operation failed');

  try {
    const filepath = getFilePath(url, 'files/fileToRead.txt');
    const readStream = createReadStream(filepath);

    readStream.on('data', chunk => {
      stdout.write(chunk);
    });

    readStream.on('end', () => {
      stdout.end();
    });

    readStream.on('error', () => {
      throw error;
    });

  } catch {
    throw error;
  }
};

await read();

// npm run fs:read