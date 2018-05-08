"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cmd = require("node-cmd");
const detectInstalled = require('detect-installed');
class Utility {
    constructor() {
        this.packageManager = 'npm';
        this.utilitySettings = undefined;
        this.colors = require('colors');
        try {
            const settingsFileContents = fs.readFileSync('.minerva.json');
            this.settings = JSON.parse(settingsFileContents);
        }
        catch (e) {
        }
        if (this.packageInstalled('yarn')) {
            this.packageManager = 'yarn';
        }
    }
    get packageJson() {
        try {
            const settingsFileContents = fs.readFileSync('package.json');
            return JSON.parse(settingsFileContents);
        }
        catch (e) {
            console.log(e);
        }
    }
    get settings() {
        return this.utilitySettings;
    }
    set settings(utilitySettings) {
        this.utilitySettings = utilitySettings;
    }
    packageInstalled(packageName) {
        return detectInstalled.sync(packageName);
    }
    output(output) {
        process.stdout.write(output + '\n');
    }
    error(output) {
        process.stderr.write(output + '\n');
    }
    run(command) {
        return new Promise((resolve, reject) => {
            cmd.get(command, (err, data, stderr) => {
                if (!err) {
                    resolve(data);
                }
                else {
                    reject(err);
                }
            });
        });
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map