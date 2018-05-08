#!/usr/bin/env node

import {Application, MinervaUtility} from "../utilities";

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
    }
}

new Minerva();