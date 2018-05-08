#!/usr/bin/env node

import {Application, GithubUtility} from "./utilities";

class MinervaRepo extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new GithubUtility();

        this.commander
            .command('status')
            .action(async () => utility.status());

        this.commander
            .command('branch')
            .action(async () => {
                await utility.outputBranch()
            });
    }
}

new MinervaRepo();