import {fromMarkdown} from "mdast-util-from-markdown";
import fs from 'fs';
import path from 'path';

export default class PageCreator {
    constructor(sourceDir, outputDir) {
        this.sourceDir = sourceDir;
        this.outputDir = outputDir;
        this.createOutputDir(outputDir);
    }

    createOutputDir(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        } else {
            fs.rmSync(dir, {recursive: true, force: true})
        }
    }

    // pagePath is relative to {sourceDir}
    createPage(pagePath) {
        if (path.extname(pagePath) == '.md') {
            // parse md
        } else {
            // passthrough other assets
            let destination = path.resolve(this.outputDir, pagePath);
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(path.dirname(destination), {recursive: true});
            }
            fs.copyFileSync(path.resolve(this.sourceDir, pagePath), path.resolve(this.outputDir, pagePath));
            console.log(`Passed through ${pagePath} to ${path.resolve(this.outputDir, pagePath)}`);
        }
    }
}