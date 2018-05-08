import {Utility} from "./utility";
import {GithubUtility} from "./github.utility";

export class VersioningUtility extends Utility {

    public async add(
        type: string,
        title: string,
        description: string
    ): Promise<void> {
        const command = `git commit -am "${type.toLowerCase()}(${title.toLowerCase()}): ${description}"`;
        console.log(command);
        this.run(command)
            .then((data) => {
                this.output(data);
            })
            .catch((err) => {
                this.error(err.message);
            });
    }

    public async publish(): Promise<void> {
        const versionResult = await this.run(`${this.packageManager} release`);
        this.output(versionResult);
        const currentBranch: string = await (new GithubUtility()).currentBranch();
        const gitResult = await this.run(`git push --follow-tags origin ${currentBranch}`)
        this.output(gitResult);
        const npmPublishResult = await this.run(`${this.packageManager} publish`);
        this.output(npmPublishResult);
    }

}