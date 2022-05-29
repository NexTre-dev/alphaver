import {fromMarkdown} from "./node_modules/mdast-util-from-markdown/index.js";
import fs from 'fs';
import path from 'path';

const createSinglePage = (pageName, pagePath) => {
    if (pagePath.match(/\.md/i)) {
        let pageData = fs.readFileSync(pagePath, {encoding: 'utf-8'});
        fs.writeFileSync(`./test/${pageName}.json`, JSON.stringify(fromMarkdown(pageData)));
    }
}

const createPages = (cwd, directoryName) => {
    let dirPath = cwd + "/" + directoryName;
    if (!fs.existsSync(dirPath) || directoryName.startsWith(".")) {
        return;
    }
    fs.readdirSync(dirPath).forEach(dirItem => {
        let dirItemPath = path.resolve(dirPath, dirItem);
        if (fs.lstatSync(dirItemPath).isDirectory()) {
            return;
        } else {
            createSinglePage(dirItem, dirItemPath);
        }
    })
}

export default createPages;