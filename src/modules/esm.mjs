import * as path from 'path';
import { release as release, version as version} from "os";
import { createServer as createServerHttp} from "http";

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

import './files/c.js';


const random = Math.random();
import unknownObject1 from './files/a.json' with { type: "json" };
import unknownObject2 from './files/b.json' with { type: "json" };

let unknownObject;

if (random > 0.5) {
    unknownObject = unknownObject1;
} else {
    unknownObject = unknownObject2;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {unknownObject, myServer};


