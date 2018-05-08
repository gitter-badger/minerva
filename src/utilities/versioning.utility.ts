import {Utility} from "./utility";
import {GithubUtility} from "./github.utility";
import {RepoInterface} from "../interfaces";

export class VersioningUtility extends Utility {
    private repo: RepoInterface;

    constructor() {
        super();
        this.repo = new GithubUtility();
    }

    public async add(
        type: string,
        title: string,
        description: string,
        addUncommitted: boolean = false
    ): Promise<void> {

        if (addUncommitted) {
            this.output(await this.repo.addAll());
        }

        this.output(
            await this.repo.commit(
                `${type.toLowerCase()}(${title.toLowerCase()}): ${description}`,
                undefined,
                [`-am`]
            )
        );
    }

    public async publish(): Promise<void> {
        if (this.settings.autoBuild) {
            this.output(this.colors.red(`Building before publishing - Please Wait...`))
            this.output(await this.run(`${this.packageManager} run build`));
            await this.repo.addAll();
        }

        this.output(await this.run(`${this.packageManager} run minerva:release`));

        this.output(await this.repo.push());

        if (this.settings.npmPublish) {
            this.output(await this.run(`npm publish`));
        }

    }

}