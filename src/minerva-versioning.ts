#!/usr/bin/env node

import {Application, VersioningUtility} from "./utilities";

class MinervaVersioning extends Application {
    public description = 'Manage the current source code repository.';

    protected async boot(): Promise<void> {
        const utility = new VersioningUtility();

        this.commander
            .command('add')
            .action(async () => {
                const answers = await this.ask([
                    {
                        type: 'input',
                        name: 'type',
                        message: 'Enter type ...',
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
                ]);

                await utility.add(
                    answers['type'], answers['title'], answers['description']
                )
            });

        this.commander
            .command('publish')
            .action(async () => {
                await utility.publish()
            });
    }
}

new MinervaVersioning();