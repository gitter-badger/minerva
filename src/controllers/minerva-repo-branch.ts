#!/usr/bin/env node

import { Application, GithubUtility } from '../utilities';

class MinervaRepoBranch extends Application {
  public description = 'Manage the current source code repository.';

  protected async boot(): Promise<void> {
    const utility = new GithubUtility();

    this.commander
      .command('checkout <branchName>')
      .alias('o')
      .action(async (branchName, options) => {
        await utility.outputCheckout(branchName);
      });

    this.commander
      .command('create <branchName> [from]')
      .alias('c')
      .action(async (branchName, from) => {
        await utility.outputCreateBranch(branchName, from || undefined);
      });

    this.commander
      .command('merge-in [from] [to]')
      .alias('mi')
      .action(async (from, to) => {
        await utility.outputMergeIn(from, to);
      });

    this.commander
      .command('merge-out [to] [from]')
      .alias('mo')
      .action(async (to, from) => {
        await utility.outputMergeOut(to, from);
      });

    this.commander
      .command('name')
      .description('Displays the current git branch.')
      .alias('n')
      .action(async () => {
        await utility.outputBranch();
      });
  }
}

new MinervaRepoBranch();
