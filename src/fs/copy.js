import {mkdir, readdir} from 'fs/promises';
import {createReadStream, createWriteStream} from 'fs';
import {join} from 'path';
import {getDirPath} from '../utils.js';

const url = import.meta.url;

const copy = async () => {
  const dirname = getDirPath(url);
  const from = join(dirname, 'files');
  const to = join(dirname, 'files_copy');

  try {
    const fileList = await readdir(from);
    await mkdir(to);

    for (let i in fileList) {
      const filename = fileList[i];
      const readStream = createReadStream(join(from, filename));
      const writeStream = createWriteStream(join(to, filename));

      readStream.on('data', chunk => {
        writeStream.write(chunk);
      })

      readStream.on('end', () => {
        writeStream.end();
      })
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

copy();

// npm run fs:copy

// copy.js - implement function that copies folder 'files' files with all
// its content into folder files_copy at the same level
// (if 'files' folder doesn't exists or 'files_copy' has already been
// created Error with message FS operation failed must be thrown)
