import process from 'node:process';

const parseEnv = () => {
    console.log(
        Object
            .entries(process.env)
            .reduce((acc, [key, value]) => {
                key.startsWith('RSS_') && acc.push(key+'='+value);
                return acc
            }, [])
            .join('; ')
    );
};

parseEnv();

// npm run cli:env

// env.js - implement function that parses environment variables
// with prefix RSS_ and prints them to the console in the format
// RSS_name1=value1; RSS_name2=value2