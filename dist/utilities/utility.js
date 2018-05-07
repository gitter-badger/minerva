"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("node-cmd");
class Utility {
    constructor() {
        this.utilitySettings = undefined;
    }
    get settings() {
        return this.utilitySettings;
    }
    set settings(utilitySettings) {
        this.utilitySettings = utilitySettings;
    }
    output(output) {
        process.stdout.write(output);
    }
    error(output) {
        process.stderr.write(output);
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