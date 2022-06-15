// Imports
import * as process from 'process';
import PageCreator from './PageCreator';
import runServer from './serve';

// Setting project root
const __baseDir = __dirname.replace(/\/wiki.*/gi, "");

// Setting config options
import config from './config'
import Logger, { Formatter } from './log';
const outputDir = config.outputDirectory  ? config.outputDirectory : "./dist";

export default class Start {
    public static async bootstrap() {
        let buildTimeStart = process.hrtime();

		const pageCreator = new PageCreator(__baseDir, outputDir);
		pageCreator.buildSite();

		let buildTimeStop = process.hrtime(buildTimeStart);
		Logger.success(
			`Built the wiki in ${Formatter.blockquote(`~${Math.round(
				buildTimeStop[0] * 1000 + buildTimeStop[1] / 1000000,
			)}ms`)}`,
		);
		runServer();
    }
}

(async () => {
    await Start.bootstrap();
})();
