import {Transform, pipeline} from 'stream';
import {EOL} from 'os';
import {stdin, stdout} from 'node:process';

class TransformStream extends Transform {

    constructor(options = {}) {
        super (options);
    }

    _transform(chunk, enc, cb) {
        const chunkStringified = chunk.toString();
        const reversedChunk = chunkStringified.replace(EOL, '').split('').reverse().join('')+EOL;
        this.push(reversedChunk);
        cb();
    }
}

const transform = async ()=> {
    const transform = new TransformStream();
    pipeline (
        stdin,
        transform,
        stdout,
        err => {
            console.log(err)
        }
    );
    stdout.write('Write anythings...\n');
};

await transform();

// npm run streams:transform
