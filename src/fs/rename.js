import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    fs.access(path.resolve(__dirname, './files/properFilename.md'), fs.constants.R_OK, function (err) {
        if (!err) console.log("FS operation failed!");
        else {
            fs.access(path.resolve(__dirname, './files/wrongFilename.txt'), fs.constants.R_OK, function (err) {
                if (err) console.log("FS operation failed!");
                else
                {
                    fs.rename(path.resolve(__dirname, './files/wrongFilename.txt'), path.resolve(__dirname, './files/properFilename.md'), err => {
                        if(err) console.log("FS operation failed!");                        
                     });
                }
            });     
        }
    });
};

await rename();