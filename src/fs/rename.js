import { rename as renameFile } from 'fs/promises';
import { getFilePath } from '../utils.js';
const url = import.meta.url;

const rename = async () => {
  try {
    const oldPath = getFilePath(url, 'files/wrongFilename.txt');
    const newPath = getFilePath(url, 'files/properFilename.md');
    await renameFile(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();

// npm run fs:rename

// rename.js - implement function that renames file wrongFilename.txt
// to properFilename with extension .md (if there's no file wrongFilename.txt
// or properFilename.md already exists Error with message FS
// operation failed must be thrown)
