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
const utilities_1 = require("./utilities");
const versioning_utility_1 = require("./utilities/versioning.utility");
class MinervaVersioning extends utilities_1.Application {
    constructor() {
        super(...arguments);
        this.description = 'Manage the current source code repository.';
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            const utility = new versioning_utility_1.VersioningUtility();
            this.commander
                .command('add')
                .action(() => __awaiter(this, void 0, void 0, function* () {
                const answers = yield this.ask([
                    {
                        type: 'input',
                        name: 'type',
                        message: 'Enter type ...',
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
                ]);
                utility.add(answers['type'], answers['title'], answers['description']);
            }));
        });
    }
}
new MinervaVersioning();
//# sourceMappingURL=minerva-versioning.js.map