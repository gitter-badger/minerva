#!/usr/bin/env node

import { Application, VersioningUtility } from '../utilities/index';
import { QuestionChoiceEntity } from '../entities/question-choice.entity';

class MinervaVersioning extends Application {
  public description = 'Manage the current source code repository.';

  protected async boot(): Promise<void> {
    const utility = new VersioningUtility();

    this.commander
      .command('add')
      .description(
        'Adds a new version of the application and commits to the repo.',
      )
      .alias('a')
      .action(async () => {
        const answers = await this.ask([
          {
            type: 'list',
            name: 'type',
            message: 'Enter type ...',
            choices: [
              { name: 'Feature', value: 'feat' } as QuestionChoiceEntity,
              { name: 'Bug Fix', value: 'fix' } as QuestionChoiceEntity,
              { name: 'Chore', value: 'chore' } as QuestionChoiceEntity,
            ],
          },
          {
            type: 'input',
            name: 'title',
            message: 'Enter title ...',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter description ...',
          },
          {
            type: 'confirm',
            name: 'includeUncommitted',
            message: 'Include all uncommitted files?',
            default: true,
          },
        ]);

        await utility.add(
          answers['type'],
          answers['title'],
          answers['description'],
          answers['includeUncommitted'],
        );
      });

    this.commander
      .command('publish')
      .description(
        'Publishes the current application version to the repo and also to npmjs.com if required.',
      )
      .alias('p')
      .action(async () => {
        await utility.publish();
      });
  }
}

new MinervaVersioning();
