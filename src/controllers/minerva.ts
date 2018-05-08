#!/usr/bin/env node

import {Application, MinervaUtility} from "../utilities";
import {ConfigEntity} from "../entities/config.entity";

class Minerva extends Application {
    public description = '';

    protected async boot(): Promise<void> {

        this.commander
            .command('repo', 'Manage the current source code repository.').alias('r');

        this.commander
            .command('versioning', 'Adds and Publishes versions of the current application.').alias('v');

        this.commander
            .command('update')
            .description('Updates Minerva to the latest version.')
            .action(async () => {
                await (new MinervaUtility()).outputUpdate();
            });

        this.commander
            .command('init')
            .description('Initiates Minerva for the current application.')
            .action(async () => {

                const answers = await this.ask([
                    {
                        type: 'confirm',
                        name: 'npmPublish',
                        message: 'Publish to npmjs.com?',
                        default: false,
                    },
                    {
                        type: 'confirm',
                        name: 'autoBuild',
                        message: 'Automatically build the project before running any publishes?',
                        default: true,
                    },
                    {
                        type: 'choice',
                        name: 'packageManager',
                        message: 'Which package manager would you like to use?',
                        choices: [
                            {name: 'Yarn', value: 'yarn'},
                            {name: 'NPM', value: 'npm'},
                        ],
                    }
                ]);

                await (new MinervaUtility()).init(answers as ConfigEntity);
            });
    }
}

new Minerva();