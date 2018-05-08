#!/usr/bin/env node

import {Application, MinervaUtility} from "../utilities";
import {ConfigEntity} from "../entities/config.entity";

class Minerva extends Application {
    public description = '';

    protected async boot(): Promise<void> {

        this.commander
            .command('repo', 'Description Here').alias('r');

        this.commander
            .command('versioning', 'Description Here').alias('v');

        this.commander
            .command('update')
            .action(async () => {
                await (new MinervaUtility()).outputUpdate();
            });

        this.commander
            .command('init')
            .action(async () => {

                const answers = await this.ask([
                    {
                        type: 'confirm',
                        name: 'npmPublish',
                        message: 'Publish to npmjs.com?',
                        default: false,
                    }
                ]);

                await (new MinervaUtility()).init(answers as ConfigEntity);
            });
    }
}

new Minerva();