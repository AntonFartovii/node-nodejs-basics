import {writeFile} from 'fs/promises';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

const create = async () => {
  try {
    await writeFile(
      getFilePath( url, 'files/fresh.txt' ),
      'I am fresh and young',
      {flag: 'wx'}
      );
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();

// npm run fs:create
