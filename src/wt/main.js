import {cpus} from 'os';
import {Worker} from 'worker_threads';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

const performCalculations = async () => {
    const cp = cpus();
    let num= 10;

    const workers = await Promise.allSettled(cp.map(() => {
        return new Promise( (resolve, reject) => {
            const worker = new Worker(getFilePath(url, 'worker.js'), {
                workerData: num++,
            });
            worker.on('message', msg => resolve(msg));
            worker.on('error', msg => reject(msg));
        });
    }));

    const results = workers.map(({status, value}) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }));

    console.table(results);
};

await performCalculations();

// npm run wt
