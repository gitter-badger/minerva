#!/usr/bin/env node

import {Application, MinervaUtility} from "../utilities";

class Minerva extends Application {
    public description = '';

    protected async boot(): Promise<void> {
        this.commander
            .command('repo', 'Description Here').alias('r')
            .command('versioning', 'Description Here').alias('v')
            .command('update')
            .action(async () => {
                (new MinervaUtility()).outputUpdate();
            });
    }
}

new Minerva();