import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const oldPath = path.resolve(__dirname, "./files");
const newPath = path.resolve(__dirname, "./files_copy");

const copy = async () => {
    fs.readdir(oldPath, (err, files) => {
        if (err) console.log('FS operation failed');
        else {
            fs.mkdir(newPath, err => {
                if (err) console.log('FS operation failed');
                else {
                    files.forEach(file => {

                        fs.copyFile(path.resolve(oldPath, file), path.resolve(newPath, file), (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    });
                }
            });
        }
    });  
}
await copy();
