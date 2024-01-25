import * as sha256 from 'node:crypto';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const file = new fs.createReadStream(path.resolve(__dirname, "./files/fileToCalculateHashFor.txt"));

const calculateHash = async () => {
    file.on('data', async function (data) {
        const hash = sha256.createHash('sha256');
        let temp = hash.update(data, 'utf-8');
        console.log(temp.digest('hex'));
    });
};

await calculateHash();