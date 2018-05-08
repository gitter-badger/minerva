import {Utility} from "./utility";
import {RepoInterface} from "../interfaces";

export class GithubUtility extends Utility implements RepoInterface {

    public async outputStatus(): Promise<void> {
        this.output(await this.run('git status'));
    }

    public async outputBranch(): Promise<void> {
        this.output(`Current Branch: ${await this.getCurrentBranch()}`)
    }

    public async commit(title: string, description?: string, options?: string[]): Promise<string> {
        return this.run(`git commit ${options || ''} "${title}"`);
    }

    public async push(): Promise<string> {
        return this.run(`git push --follow-tags origin ${await this.getCurrentBranch()}`);
    }

    public addAll(): Promise<string> {
        return this.run(`git add -A`)
    }

    protected async getCurrentBranch(): Promise<string> {
        return this.run(`git rev-parse --abbrev-ref HEAD`)
    }

}