// Imports
import fs from 'fs';
import process from 'process';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import PageCreator from './PageCreator.js';

// Setting project root
const __baseDir = __dirname.replace(/\/wiki/gi, "");

// Setting config options
import config from './config.json' assert {type: 'json'};
const outputDir = config.outputDirectory  ? '.' + config.outputDirectory : "./site";

const build = () => {
    let buildTimeStart = process.hrtime();
    const pageCreator = new PageCreator(__baseDir, outputDir);
    pageCreator.createPage('./jar/lilypad_qa/lilypad_qa_client.jar');
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    }).then(() => {
        let stop = process.hrtime(buildTimeStart);
        console.log(`Successful build in: ${stop[0]*1000}ms`);
    })
    
}

build();
