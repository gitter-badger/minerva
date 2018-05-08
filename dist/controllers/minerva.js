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
                .command('repo', 'Description Here').alias('r');
            this.commander
                .command('versioning', 'Description Here').alias('v');
            this.commander
                .command('update')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                yield (new utilities_1.MinervaUtility()).outputUpdate();
            }));
            this.commander
                .command('init')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                const answers = yield this.ask([
                    {
                        type: 'confirm',
                        name: 'npmPublish',
                        message: 'Publish to npmjs.com?',
                        default: false,
                    }
                ]);
                yield (new utilities_1.MinervaUtility()).init(answers);
            }));
        });
    }
}
new Minerva();
//# sourceMappingURL=minerva.js.map