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
const index_1 = require("../utilities/index");
class MinervaVersioning extends index_1.Application {
    constructor() {
        super(...arguments);
        this.description = 'Manage the current source code repository.';
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            const utility = new index_1.VersioningUtility();
            this.commander
                .command('add')
                .description('Adds a new version of the application and commits to the repo.')
                .alias('a')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                const answers = yield this.ask([
                    {
                        type: 'list',
                        name: 'type',
                        message: 'Enter type ...',
                        choices: [
                            { name: 'Feature', value: 'feat' },
                            { name: 'Bug Fix', value: 'fix' },
                            { name: 'Chore', value: 'chore' },
                        ],
                    },
                    {
                        type: 'input',
                        name: 'title',
                        message: 'Enter title ...',
                    },
                    {
                        type: 'input',
                        name: 'description',
                        message: 'Enter description ...',
                    },
                    {
                        type: 'confirm',
                        name: 'includeUncommitted',
                        message: 'Include all uncommitted files?',
                        default: true,
                    }
                ]);
                yield utility.add(answers['type'], answers['title'], answers['description'], answers['includeUncommitted']);
            }));
            this.commander
                .command('publish')
                .description('Publishes the current application version to the repo and also to npmjs.com if required.')
                .alias('p')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                yield utility.publish();
            }));
        });
    }
}
new MinervaVersioning();
//# sourceMappingURL=minerva-versioning.js.map