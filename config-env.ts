const fs = require('fs');
require('dotenv').config();
const { argv } = require('yargs');
const environment = argv.environment;

let apiKey;
let targetPath;
if (environment === 'prod') {
    apiKey = process.env.unplashKey;
    targetPath = `./src/environments/environment.prod.ts`;
} else {
    apiKey = process.env.unplashKey;
    targetPath = `./src/environments/environment.prod.ts`;
}

const envConfigFile = `
export const environment = {
    production: false,
    unplashKey: "${apiKey}",};`;

fs.writeFile(targetPath, envConfigFile, function (err: any) {
    if (err) {
        console.log(err);
    }
});