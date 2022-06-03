import serveStatic from "serve-static";
import config from './config.json' assert {type: 'json'};
import http from 'http';
import fs from 'fs';
import { exit } from "process";

const runServer = () => {
    const serveRoot = serveStatic(config.outputDirectory, {
        index: 'index.html'
    });

    if (!fs.existsSync(config.outputDirectory)) {
        console.error('Site directory does not exist. Have you built the site yet?');
        exit();
    }

    const server = http.createServer((req, res) => {
        serveRoot(req, res, (req, res) => {
            return;
        });
    });

    server.listen(8080);
    if (server.listening) {
        console.log('Local server is running and listening on port 8080.\nGo to \'http://localhost:8080\' to view the wiki site.');
    } else {
        console.error('Failed to create local server');
        exit();
    }
}

runServer();