"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
class VersioningUtility extends utility_1.Utility {
    add(type, title, description) {
        const command = `git commit -am "${type.toLowerCase()}(${title.toLowerCase()}): ${description}"`;
        console.log(command);
        this.run(command)
            .then((data) => {
            this.output(data);
        })
            .catch((err) => {
            this.error(err.message);
        });
    }
}
exports.VersioningUtility = VersioningUtility;
//# sourceMappingURL=versioning.utility.js.map