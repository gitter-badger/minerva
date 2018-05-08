import {Utility} from "./utility";

export class GithubUtility extends Utility {

    public status(): void {
        this.run('git status')
            .then((data) => {
                this.output(data);
            })
            .catch((err) => {
                this.error(err.message);
            });
    }

    public async outputBranch(): Promise<void> {
        this.output(`Current Branch: ${await this.currentBranch()}`)
    }

    public currentBranch(): Promise<string> {
        return this.run(`git rev-parse --abbrev-ref HEAD`)
    }

}