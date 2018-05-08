const detectInstalled = require('detect-installed');
import * as cmd from 'node-cmd';

export abstract class Utility {

    public packageManager: string = 'npm';
    protected utilitySettings: any = undefined;

    constructor() {
        const yarnCheck = detectInstalled.sync('yarn');

        if (yarnCheck) {
            this.packageManager = 'yarn';
        }

    }

    public get settings(): any {
        return this.utilitySettings;
    }

    public set settings(utilitySettings: any) {
        this.utilitySettings = utilitySettings;
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