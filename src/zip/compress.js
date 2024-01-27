import * as zlib from 'node:zlib';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
import * as stream from 'node:stream';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const zip = zlib.createGzip();
    const file = fs.createReadStream(path.resolve(__dirname, './files/fileToCompress.txt'));
    const fileZip = fs.createWriteStream(path.resolve(__dirname, './files/archive.gz'));
    stream.pipeline(file, zip, fileZip, (err) => {
        if (err) {
            console.error('Ошибка');            
        }
    });
};

await compress();