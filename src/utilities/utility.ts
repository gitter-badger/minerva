const fs = require('fs');
import { ConfigEntity } from '../entities/config.entity';
import * as cmd from 'node-cmd';

const detectInstalled = require('detect-installed');

export abstract class Utility {
  public packageManager: string = 'npm';
  protected utilitySettings: any = undefined;
  protected colors = require('colors');

  constructor() {
    try {
      const settingsFileContents = fs.readFileSync('.minerva.json');
      this.settings = JSON.parse(settingsFileContents) as ConfigEntity;
    } catch (e) {}

    if (this.settings.packageManager) {
      this.packageManager = this.settings.packageManager;
    } else if (this.packageInstalled('yarn')) {
      this.packageManager = 'yarn';
    }
  }

  public get packageJson(): any {
    try {
      const settingsFileContents = fs.readFileSync('package.json');
      return JSON.parse(settingsFileContents);
    } catch (e) {
      console.log(e);
    }
  }

  public get settings(): ConfigEntity {
    return this.utilitySettings;
  }

  public set settings(utilitySettings: ConfigEntity) {
    this.utilitySettings = utilitySettings;
  }

  public packageInstalled(packageName: string): boolean {
    return detectInstalled.sync(packageName);
  }

  protected output(output: any): void {
    process.stdout.write(output + '\n');
  }

  protected error(output: any): void {
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
      });
    });
  }
}
