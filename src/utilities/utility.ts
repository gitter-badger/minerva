const detectInstalled = require('detect-installed');
import * as cmd from 'node-cmd';

export abstract class Utility {

    public packageManager: string = 'npm';
    protected utilitySettings: any = undefined;

    constructor() {
        if (this.packageInstalled('yarn')) {
            this.packageManager = 'yarn';
        }

    }

    public get settings(): any {
        return this.utilitySettings;
    }

    public set settings(utilitySettings: any) {
        this.utilitySettings = utilitySettings;
    }

    public packageInstalled(packageName: string): boolean {
        return detectInstalled.sync(packageName);
    }

    protected output(output: string): void {
        process.stdout.write(output + '\n');
    }

    protected error(output: string): void {
        process.stderr.write(output + '\n');
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