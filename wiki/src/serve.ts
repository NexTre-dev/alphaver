import config from './config';
import * as serveStatic from "serve-static";
import * as http from 'http';
import * as fs from 'fs';
import { exit } from "process";
import Logger, { Formatter } from './log';

const runServer = () => {
    const serveRoot = serveStatic(config.outputDirectory, {
        index: 'index.html'
    });

    if (!fs.existsSync(config.outputDirectory)) {
        Logger.crit('Site directory does not exist. Have you built the site yet?');
        exit();
    }

    const server = http.createServer((req, res) => {
        serveRoot(req, res, () => {
            return;
        });
    });

    server.listen(config.port);
    if (server.listening) {
        Logger.help(`Local server is running and listening on port ${Formatter.bold(config.port.toString())}.\nGo to ${Formatter.bold(`http://localhost:${config.port}`)} to view the wiki site.`);
    } else {
        Logger.crit('Failed to create local server!');
        exit();
    }
}

export default runServer;