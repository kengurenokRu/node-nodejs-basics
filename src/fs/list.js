import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const list = async () => {
    fs.readdir(path.resolve(__dirname, "./files"), function (err, files) {
        if (err) console.log("FS operation failed");
        else {
            files.forEach(file => {
                console.log(file);
            });
        }
    });
};

await list();