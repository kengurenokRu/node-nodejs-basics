const parseArgs = () => {
    let argv = process.argv.slice(2);
    for (let k = 0; k <= argv.length - 1; k += 2) {
        console.log(argv[k].slice(2) + " is " + argv[k + 1]);
    }
};

parseArgs();