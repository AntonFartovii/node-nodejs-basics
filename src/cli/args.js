import process from 'node:process';

const parseArgs = () => {
    const argv = process.argv.slice(2);
    let res = [];

    for(let i = 0; i < argv.length; i++) {
        const value = argv[i+1] ? argv[i+1] : '';
        argv[i].startsWith('--') &&
        res.push( argv[i].slice(2) + ' is ' + value);
    }
    console.log(res.join(', '));
};

parseArgs();

// npm run cli:args

//  "cli:args": "node src/cli/args.js --some-arg value1 --other 1337 --arg2 42",

// args.js - implement function that parses command line arguments
// (given in format --propName value --prop2Name value2, you don't need to
// validate it) and prints them to the console in the format
// propName is value, prop2Name is value2
