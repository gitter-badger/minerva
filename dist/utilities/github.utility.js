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
class GithubUtility extends utility_1.Utility {
    status() {
        this.run('git status')
            .then((data) => {
            this.output(data);
        })
            .catch((err) => {
            this.error(err.message);
        });
    }
    outputBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(`Current Branch: ${yield this.currentBranch()}`);
        });
    }
    currentBranch() {
        return this.run(`git rev-parse --abbrev-ref HEAD`);
    }
}
exports.GithubUtility = GithubUtility;
//# sourceMappingURL=github.utility.js.map