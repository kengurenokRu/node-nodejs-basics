import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    fs.access(path.resolve(__dirname, './files/fresh.txt'), fs.constants.R_OK | fs.constants.W_OK, function (err) {
        if (!err) console.log("FS operation failed!");
        else {
            const file = fs.createWriteStream(path.resolve(__dirname, './files/fresh.txt'), (err) => {
                if (err) console.log("FS operation failed!");
            });
            file.write("I am fresh and young");
            file.close();
        }
    });
};

await create();