import process from 'node:process';
import {readdir} from 'fs/promises';
import {join} from 'path';
import {getDirPath} from '../utils.js';

const url = import.meta.url;

const list = async () => {
  const dirname = getDirPath(url);
  const src = join(dirname, 'files');

  try {
    const files = await readdir(src);
    const stringListOfFiles = files.join('\n');
    process.stdout.write(stringListOfFiles);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();

// npm run fs:list
