import * as zlib from 'node:zlib';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
import * as stream from 'node:stream';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const zip = zlib.createUnzip();
    const file = fs.createWriteStream(path.resolve(__dirname, './files/fileToCompress.txt'));
    const fileZip = fs.createReadStream(path.resolve(__dirname, './files/archive.gz'));
    stream.pipeline(fileZip, zip, file, (err) => {
        if (err) {
            console.error('Ошибка');            
        }
    });
};

await decompress();