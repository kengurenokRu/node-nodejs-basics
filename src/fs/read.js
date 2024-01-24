import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const file = new fs.ReadStream(path.resolve(__dirname, "./files/fileToRead.txt"));

    let count = 0;
    file.on('error', function (err) {
        if (err) console.log("FS operation failed");
    })
    file.on('readable', function (err) {
        if (err) console.log("FS operation failed");
        else {
            let data;
            while ((data = file.read()) != null) {
                console.log(String(data));
                count++;
            }
            if (count == 0) console.log("Файл пуст");
        }
    });
};
await read();