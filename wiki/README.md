# Wiki Site Generator
This script will create a viewable website from the Markdown in this repository. Requires Nodejs to run.

## Prerequisites
* Node.JS >= 16.15.1 LTS [*(Download it here)*](https://nodejs.org/en/),
* A PC with a terminal *(duh)*

## Usage
To run the generator, enter the following commands in the `/wiki/` directory:
```shell
$ npm install
$ npm run dev
```

This should build the site and start a local web server where you can view the wiki webpages. The default port is 8080 *(you can change this in `config.ts`)*, and you should be able to view the site by visiting <a href="`http://localhost:8080`" target="_blank">`http://localhost:8080`</a>.

If you encounter any issues, please [open a new issue](https://github.com/NexTre-dev/alphaver/issues/new)!