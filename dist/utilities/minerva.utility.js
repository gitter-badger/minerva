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
const fs = require('fs');
const utility_1 = require("./utility");
const npmAddScript = require('npm-add-script');
class MinervaUtility extends utility_1.Utility {
    init(config) {
        return __awaiter(this, void 0, void 0, function* () {
            fs.writeFileSync('.minerva.json', JSON.stringify(config, undefined, 2));
            if (!this.packageInstalled('standard-version')) {
                this.output('Installing standard-version: Used for Automatic versioning and CHANGELOG generation.');
                if (this.packageManager === 'yarn') {
                    yield this.run(`${this.packageManager} add --dev standard-version`);
                }
                else {
                    yield this.run(`${this.packageManager} i --save-dev standard-version`);
                }
            }
            try {
                this.output('Installing release script: Utilising standard-version to publish changes.');
                npmAddScript({ key: 'minerva:release', value: 'standard-version' });
            }
            catch (e) { }
        });
    }
    outputUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.output(yield this.run(`npm i -g @sisk-technology-group/minerva`));
        });
    }
}
exports.MinervaUtility = MinervaUtility;
//# sourceMappingURL=minerva.utility.js.map