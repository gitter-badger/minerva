#!/usr/bin/env node

import {Application, GithubUtility} from "../utilities/index";

class MinervaRepo extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new GithubUtility();

        this.commander
            .command('status')
            .alias('s')
            .action(async () => {
                await utility.outputStatus()
            });

        this.commander
            .command('branch')
            .alias('b')
            .action(async () => {
                await utility.outputBranch()
            });
    }
}

new MinervaRepo();