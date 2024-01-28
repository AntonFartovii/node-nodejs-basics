import {stdout} from 'node:process';
import {readFile} from 'fs/promises';
import {createHash} from 'crypto';
import {getFilePath} from '../utils.js';

const url = import.meta.url;

const calculateHash = async () => {
    try {
        const filename = getFilePath(url, 'files/fileToCalculateHashFor.txt');
        const content = await readFile(filename);
        const hash= createHash('sha256').update(content).digest('hex');
        stdout.write(hash + '\n');
    } catch (e) {
        throw e;
    }
};

await calculateHash();

// npm run hash

// calcHash.js - implement function that calculates SHA256 hash
// for file fileToCalculateHashFor.txt and logs it into console as hex
