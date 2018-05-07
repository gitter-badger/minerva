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

}