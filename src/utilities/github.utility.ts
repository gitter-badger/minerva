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

    /**
     * Pulls the latest changes for the current branch
     *
     * @returns {Promise<void>}
     */
    public async pull(): Promise<void> {
        await this.run(`git pull`)
    }

    public async checkout(branchName: string): Promise<void> {
        await this.run(`git checkout ${branchName}`)
    }

    /**
     * Creates a new branch with the given name from master or a specified branch.
     * @param {string} branchName
     * @param {string} from
     */
    public async createBranch(branchName: string, from?: string): Promise<void> {
        const fromBranch = from || 'master';
        await this.checkout(fromBranch);
        await this.pull();
        this.output(await this.run(`git checkout -b ${branchName.toLowerCase().split(' ').join('-')}`));
    }

    /**
     * Merges a specified branch into the current branch or a specified one.
     *
     * @param {string} to
     * @param {string} from
     */
    public async mergeIn(from?: string, to?: string): Promise<void> {
        const fromBranch = from || 'master';
        const toBranch = to || await this.getCurrentBranch();
        await this.pull();
        await this.checkout(fromBranch);
        await this.pull();
        await this.checkout(toBranch);
        this.output(await this.run(`git merge ${fromBranch}`));
    }

    /**
     * Merges the current branch, or a specified one, into another branch.
     *
     * @param {string} to
     * @param {string} from
     */
    public async mergeOut(to: string, from?: string): Promise<void> {
        const fromBranch = from || await this.getCurrentBranch();
        await this.pull();
        // Change to the 'to' branch
        await this.checkout(to);
        await this.pull();
        this.output(await this.run(`git merge ${fromBranch}`));
    }

    protected async getCurrentBranch(): Promise<string> {
        return this.run(`git rev-parse --abbrev-ref HEAD`)
    }

}