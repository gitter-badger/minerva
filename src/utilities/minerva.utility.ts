const fs = require('fs');
import { ConfigEntity } from '../entities/config.entity';
import { Utility } from './utility';
import { GithubUtility } from './github.utility';

const npmAddScript = require('npm-add-script');

export class MinervaUtility extends Utility {
  public async init(config: ConfigEntity): Promise<void> {
    fs.writeFileSync('.minerva.json', JSON.stringify(config, undefined, 2));

    if (!this.packageInstalled('standard-version')) {
      this.output(
        'Installing standard-version: Used for Automatic versioning and CHANGELOG generation.',
      );
      if (this.packageManager === 'yarn') {
        await this.run(`${this.packageManager} add --dev standard-version`);
      } else {
        await this.run(`${this.packageManager} i --save-dev standard-version`);
      }
    }
    try {
      this.output(
        'Installing release script: Utilising standard-version to publish changes.',
      );
      npmAddScript({ key: 'minerva:release', value: 'standard-version' });
    } catch (e) {}
  }

  public async outputUpdate(): Promise<void> {
    this.output(await this.run(`npm i -g @sisk-technology-group/minerva`));
  }
}
