#!/usr/bin/env node

import {Application, GithubUtility} from "../utilities";

class MinervaRepoBranch extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new GithubUtility();

        this.commander
            .command('create <branchName> [from]')
            .option('--from <from>', 'Which branch to create from.')
            .alias('c')
            .action(async (branchName, options) => {
                await utility.createBranch(branchName, options ? options.from : undefined)
            });

        this.commander
            .command('name')
            .description('Displays the current git branch.')
            .alias('n')
            .action(async () => {
                await utility.outputBranch()
            });
    }
}

new MinervaRepoBranch();