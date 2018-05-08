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
const github_utility_1 = require("./github.utility");
class VersioningUtility extends utility_1.Utility {
    add(type, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = `git commit -am "${type.toLowerCase()}(${title.toLowerCase()}): ${description}"`;
            console.log(command);
            this.run(command)
                .then((data) => {
                this.output(data);
            })
                .catch((err) => {
                this.error(err.message);
            });
        });
    }
    publish() {
        return __awaiter(this, void 0, void 0, function* () {
            const versionResult = yield this.run(`${this.packageManager} release`);
            this.output(versionResult);
            const currentBranch = yield (new github_utility_1.GithubUtility()).currentBranch();
            const gitResult = yield this.run(`git push --follow-tags origin ${currentBranch}`);
            this.output(gitResult);
            const npmPublishResult = yield this.run(`${this.packageManager} publish`);
            this.output(npmPublishResult);
        });
    }
}
exports.VersioningUtility = VersioningUtility;
//# sourceMappingURL=versioning.utility.js.map