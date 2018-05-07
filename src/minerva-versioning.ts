import {Application} from "./utilities";
import {VersioningUtility} from "./utilities/versioning.utility";

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

                utility.add(
                    answers['type'], answers['title'], answers['description']
                )
            });
    }
}

new MinervaVersioning();