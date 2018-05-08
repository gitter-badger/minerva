import * as cmd from 'node-cmd';

export abstract class Utility {

    protected utilitySettings: any = undefined;

    public get settings(): any {
        return this.utilitySettings;
    }

    public set settings(utilitySettings: any) {
        this.utilitySettings = utilitySettings;
    }

    protected get packageManager(): string {
        return 'yarn';
    }

    protected output(output: string): void {
        process.stdout.write(output);
    }

    protected error(output: string): void {
        process.stderr.write(output);
    }

    protected run(command: string): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            cmd.get(command, (err, data, stderr) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        });

    }

}