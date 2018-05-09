#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class Minerva extends utilities_1.Application {
    constructor() {
        super(...arguments);
        this.description = '';
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            this.commander
                .command('repo', 'Manage the current source code repository.').alias('r');
            this.commander
                .command('versioning', 'Adds and Publishes versions of the current application.').alias('v');
            this.commander
                .command('update')
                .description('Updates Minerva to the latest version.')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                yield (new utilities_1.MinervaUtility()).outputUpdate();
            }));
            this.commander
                .command('init')
                .description('Initiates Minerva for the current application.')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                const answers = yield this.ask([
                    {
                        type: 'confirm',
                        name: 'npmPublish',
                        message: 'Publish to npmjs.com?',
                        default: false,
                    },
                    {
                        type: 'confirm',
                        name: 'autoBuild',
                        message: 'Automatically build the project before running any publishes?',
                        default: true,
                    },
                    {
                        type: 'list',
                        name: 'packageManager',
                        message: 'Which package manager would you like to use?',
                        choices: [
                            { name: 'Yarn', value: 'yarn' },
                            { name: 'NPM', value: 'npm' },
                        ],
                    }
                ]);
                yield (new utilities_1.MinervaUtility()).init(answers);
            }));
        });
    }
}
new Minerva();
//# sourceMappingURL=minerva.js.map