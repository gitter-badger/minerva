import {Application, GithubUtility} from "./utilities";

class MinervaRepo extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new GithubUtility();

        this.commander
            .command('status')
            .action(() => utility.status());
    }
}

new MinervaRepo();