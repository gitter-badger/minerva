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
const utility_1 = require("./utility");
const colors = require('colors');
class GithubUtility extends utility_1.Utility {
    outputStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(yield this.run('git status'));
        });
    }
    outputBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(`Current Branch: ${yield this.getCurrentBranch()}`);
        });
    }
    commit(title, description, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(`git commit ${options || ''} "${title}"`);
        });
    }
    push() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(`git push --follow-tags origin ${yield this.getCurrentBranch()}`);
        });
    }
    addAll() {
        return this.run(`git add -A`);
    }
    outputPull() {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(`${colors.green(yield this.getCurrentBranch())}: ${yield this.pull()}`);
        });
    }
    pull() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(`git pull`);
        });
    }
    outputCheckout(branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(yield this.checkout(branchName));
        });
    }
    checkout(branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(`git checkout ${branchName}`);
        });
    }
    outputCreateBranch(branchName, from) {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(yield this.createBranch(branchName, from));
        });
    }
    createBranch(branchName, from) {
        return __awaiter(this, void 0, void 0, function* () {
            const fromBranch = from || 'master';
            yield this.checkout(fromBranch);
            yield this.pull();
            return this.run(`git checkout -b ${branchName.toLowerCase().split(' ').join('-')}`);
        });
    }
    mergeIn(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const fromBranch = from || 'master';
            const toBranch = to || (yield this.getCurrentBranch());
            yield this.pull();
            yield this.checkout(fromBranch);
            yield this.pull();
            yield this.checkout(toBranch);
            return yield this.run(`git merge ${fromBranch}`);
        });
    }
    mergeOut(to, from) {
        return __awaiter(this, void 0, void 0, function* () {
            const fromBranch = from || (yield this.getCurrentBranch());
            yield this.pull();
            yield this.checkout(to);
            yield this.pull();
            return yield this.run(`git merge ${fromBranch}`);
        });
    }
    getCurrentBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.run(`git rev-parse --abbrev-ref HEAD`)).replace(/\r?\n|\r/g, '');
        });
    }
}
exports.GithubUtility = GithubUtility;
//# sourceMappingURL=github.utility.js.map