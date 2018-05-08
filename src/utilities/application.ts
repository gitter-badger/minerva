const fs = require("fs");
import * as program from 'commander';
import {QuestionEntity} from "../entities/question.entity";

const {prompt} = require('inquirer');

export abstract class Application {
    public version = undefined;
    public abstract description;
    private readonly applicationCommander = undefined;

    constructor(commander = undefined) {
        this.applicationCommander = commander || program;
        this.setVersionAndDescription();

        this.boot().then(() => {
            this.applicationCommander
                .parse(process.argv);
        });
    }

    public get packageJson(): any {
        try {
            const settingsFileContents = fs.readFileSync(`${__dirname}/../../package.json`);
            return JSON.parse(settingsFileContents);
        } catch (e) {
            console.log(e);
        }
    }

    protected get commander() {
        return this.applicationCommander;
    }

    protected abstract async boot(): Promise<void>;

    protected ask(questions: QuestionEntity[]): Promise<any> {
        return prompt(questions);
    }

    private setVersionAndDescription() {
        this.commander
            .version(this.packageJson.version, '-V, --version')
            .description(this.description);
    }


}