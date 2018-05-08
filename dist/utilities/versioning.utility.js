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
    constructor() {
        super();
        this.repo = new github_utility_1.GithubUtility();
    }
    add(type, title, description, addUncommitted = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (addUncommitted) {
                this.output(yield this.repo.addAll());
            }
            this.output(yield this.repo.commit(`${type.toLowerCase()}(${title.toLowerCase()}): ${description}`, undefined, [`-am`]));
        });
    }
    publish() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.settings.autoBuild) {
                this.output(this.colors.red(`Building before publishing - Please Wait...`));
                this.output(yield this.run(`${this.packageManager} run build`));
                yield this.repo.addAll();
            }
            this.output(yield this.run(`${this.packageManager} run minerva:release`));
            this.output(yield this.repo.push());
            if (this.settings.npmPublish) {
                this.output(yield this.run(`npm publish`));
            }
        });
    }
}
exports.VersioningUtility = VersioningUtility;
//# sourceMappingURL=versioning.utility.js.map