"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const { prompt } = require('inquirer');
class Application {
    constructor(commander = undefined) {
        this.version = undefined;
        this.applicationCommander = undefined;
        this.applicationCommander = commander || program;
        this.setVersionAndDescription();
        this.boot().then(() => {
            this.applicationCommander
                .parse(process.argv);
        });
    }
    get commander() {
        return this.applicationCommander;
    }
    ask(questions) {
        return prompt(questions);
    }
    setVersionAndDescription() {
        this.commander
            .version(this.version, '-V, --version')
            .description(this.description);
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map