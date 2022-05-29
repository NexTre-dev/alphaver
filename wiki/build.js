// Imports
import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import createPages from './createPages.js';

// Setting project root
const __baseDir = __dirname.replace(/\/wiki/gi, "");

// Setting config options
import config from './config.json' assert {type: 'json'};
const outputDir = config.outputDirectory ? '.' + config.outputDirectory : "./site";

const build = () => {
    if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, {recursive: true}, err => console.error(err));
    }
    fs.mkdirSync(outputDir, {recursive: true});

    fs.readdirSync(__baseDir).forEach(relativeDir => {
        let dirItemPath = __baseDir + '/' + relativeDir;
        if (dirItemPath.startsWith('.')) {
            return;
        }
        let dirItemObject = fs.lstatSync(dirItemPath);
        if (dirItemObject.isDirectory()) {
            // create pages recursively
            createPages(__baseDir, relativeDir);
        } else {
            return;
        }
    })
}

build();
