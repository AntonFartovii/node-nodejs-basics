import {unlink} from 'fs/promises';
import * as path from 'path';
import {getDirPath} from '../utils.js';

const url = import.meta.url;

const remove = async () => {
  const dirname = getDirPath(url);
  const filename = path.resolve(dirname, 'files/fileToRemove.txt');

  try {
    await unlink(filename);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();

// npm run fs:delete

// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message
// FS operation failed must be thrown)