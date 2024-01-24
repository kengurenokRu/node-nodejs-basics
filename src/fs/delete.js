import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    fs.unlink(path.resolve(__dirname, "./files/fileToRemove.txt"), (err) => {
        if (err) throw 'FS operation failed';
      });
};

await remove();