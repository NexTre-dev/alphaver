import serveStatic from "serve-static";
import config from './config.json' assert {type: 'json'};
import http from 'http';
import fs from 'fs';

const runServer = () => {
    const serveRoot = serveStatic(config.outputDirectory, {
        index: 'index.html'
    });
    const server = http.createServer((req, res) => {
        serveRoot(req, res, (req, res) => {
            return;
        });
    });

    server.listen(8080);
}

runServer();