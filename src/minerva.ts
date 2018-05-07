import {Application} from "./utilities";

class Minerva extends Application {
    public description = '';

    protected async boot(): Promise<void> {
        this.commander
            .command('repo', 'Description Here')
            .command('versioning', 'Description Here');
    }
}

new Minerva();