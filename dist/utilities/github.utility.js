"use strict";
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
}
exports.GithubUtility = GithubUtility;
//# sourceMappingURL=github.utility.js.map