#!/usr/bin/env node

import {Application} from "../utilities/index";

class Minerva extends Application {
    public description = '';

    protected async boot(): Promise<void> {
        this.commander
            .command('repo', 'Description Here').alias('r')
            .command('versioning', 'Description Here').alias('v');
    }
}

new Minerva();