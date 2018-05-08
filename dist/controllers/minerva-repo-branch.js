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
class MinervaRepoBranch extends utilities_1.Application {
    constructor() {
        super(...arguments);
        this.description = 'Manage the current source code repository.';
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            const utility = new utilities_1.GithubUtility();
            this.commander
                .command('create <branchName> [from]')
                .option('--from <from>', 'Which branch to create from.')
                .alias('c')
                .action((branchName, options) => __awaiter(this, void 0, void 0, function* () {
                yield utility.createBranch(branchName, options ? options.from : undefined);
            }));
            this.commander
                .command('name')
                .description('Displays the current git branch.')
                .alias('n')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                yield utility.outputBranch();
            }));
        });
    }
}
new MinervaRepoBranch();
//# sourceMappingURL=minerva-repo-branch.js.map