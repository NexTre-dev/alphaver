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
    pageCreator.buildSite();
    
    let buildTimeStop = process.hrtime(buildTimeStart);  
    console.log(`Successful build in ${Math.round(buildTimeStop[0] * 1000 + buildTimeStop[1] / 1000000)}ms`);
}

build();
