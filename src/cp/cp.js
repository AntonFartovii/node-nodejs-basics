import process from 'node:process';
import {fork} from 'child_process';
import {getFilePath} from '../utils.js';
const url = import.meta.url;

export const spawnChildProcess = async (args) => {

    const filepath = getFilePath(url,   'files/script.js')
    args.splice(0, 2);
    const child = fork(filepath, args, {silent: true});

    process.stdout.write('Enter your text or press "ctrl + c" to quit\n')
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.stdout.on('data', data => {
        const msg = `Received from child stdout: ${data}`;
        process.stdout.write(msg);
    });
}

spawnChildProcess(process.argv);

// npm run cp --arg1 value1 --arg2 value2


// cp.js - implement function spawnChildProcess that receives array of
// arguments args and creates child process from file script.js, passing
// these args to it. This function should create IPC-channel between stdin
// and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout

// spawn() и fork(), каждый из которых возвращает экземпляр класса ChildProcess.
