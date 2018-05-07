import {Utility} from "./utility";

export class VersioningUtility extends Utility {

    public add(
        type: string,
        title: string,
        description: string
    ): void {
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

}