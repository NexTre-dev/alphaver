import {marked} from 'marked';
import fs from 'fs';
import path from 'path';

export default class PageCreator {
    constructor(sourceDir, outputDir) {
        this.source = sourceDir;
        this.output = outputDir;
        this.createOutputDir(outputDir);
    }

    createOutputDir(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        } else {
            fs.rmSync(dir, {recursive: true, force: true})
        }
    }

    // pagePath is relative to {output}
    createPage(pagePath) {
        let destinationFile = this.output + '/' + pagePath;
        let sourceFile = this.source + '/' + pagePath;
        if (!fs.existsSync(path.dirname(destinationFile))) {
            fs.mkdirSync(path.dirname(destinationFile), {recursive: true});
        }
        if (path.extname(pagePath) == '.md') {
            // parse md
            let outputFile = destinationFile.replace('.md', '.html');
            outputFile = outputFile.replace(/README/i, 'index');
            let html = marked.parse(fs.readFileSync(sourceFile).toString());
            
            let fixedLinksHTML = html;
            let mdLinkPattern = new RegExp(/href=".*?"/gi);
            if (fixedLinksHTML.match(mdLinkPattern)) {
                fixedLinksHTML.match(mdLinkPattern).forEach(match => {
                    let newString = match.replace(/\.md/, '.html');
                    fixedLinksHTML = fixedLinksHTML.replace(match, newString);
                });
            }
            fs.writeFileSync(outputFile, fixedLinksHTML);
        } else {
            // passthrough other assets
            fs.copyFileSync(sourceFile, destinationFile);
            console.log(`Passed through ${path.basename(pagePath)}`);
        }
    }

    buildDirectoryRecursive(workingDir) {
        let readDir = this.source + '/' + workingDir;

        fs.readdirSync(readDir, {withFileTypes: true}).forEach(dirEnt => {

            // ignore dotfiles and wiki directory
            if (dirEnt.name.startsWith('.') || dirEnt.name == 'wiki') {
                return;
            }

            if (fs.lstatSync(readDir + '/' + dirEnt.name).isDirectory()) {
                this.buildDirectoryRecursive(workingDir + '/' + dirEnt.name);
            } else {
                this.createPage(workingDir + '/' + dirEnt.name);
            }
        })
    }

    buildSite() {
        this.buildDirectoryRecursive('');
    }
}