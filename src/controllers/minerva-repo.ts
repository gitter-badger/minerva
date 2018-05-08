#!/usr/bin/env node

import {Application, GithubUtility} from "../utilities";

class MinervaRepo extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new GithubUtility();

        this.commander
            .command('status')
            .description('Displays the current git status of the branch.')
            .alias('s')
            .action(async () => {
                await utility.outputStatus()
            });

        this.commander
            .command('pull')
            .description('Displays the current git status of the branch.')
            .alias('p')
            .action(async () => {
                await utility.outputPull()
            });

        this.commander
            .command('branch', 'Manages the current branch.')
            .alias('b');
    }
}

new MinervaRepo();