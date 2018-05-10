const fs = require('fs');
import * as program from 'commander';
import { QuestionEntity } from '../entities/question.entity';

const { prompt } = require('inquirer');

export abstract class Application {
  /**
   * The version number of the Minerva application.
   *
   * @type {undefined}
   */
  public version: string = undefined;

  /**
   * The description of the current application.
   */
  public abstract description;

  /**
   * Holds the commander object used to handle CLI based commands.
   * @type {undefined}
   */
  private readonly applicationCommander = undefined;

  /**
   * The constructer allows a commander instance to be passed, if none is given a new
   * commander instance is created. Then it proceeds to set the version number,
   * description and then boots any required commands from the class extending this
   * abstract. Finally is parses any given arguments.
   *
   * @param {any} commander
   */
  constructor(commander = undefined) {
    this.applicationCommander = commander || program;
    this.setVersionAndDescription();

    this.boot().then(() => {
      this.applicationCommander.parse(process.argv);
    });
  }

  /**
   * Returns the content of the Minerva package.json file appropriately converted
   * to a JSON object for easy manipulation.
   *
   * @returns {any}
   */
  public get packageJson(): any {
    try {
      const settingsFileContents = fs.readFileSync(
        `${__dirname}/../../package.json`,
      );
      return JSON.parse(settingsFileContents);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Returns the commander object used to create CLI based commands.
   *
   * @returns {undefined}
   */
  protected get commander() {
    return this.applicationCommander;
  }

  /**
   * An method that is called on the class extending this abstract which will
   * boot up any appropriate commands required for Minerva to function.
   *
   * @returns {Promise<void>}
   */
  protected abstract async boot(): Promise<void>;

  /**
   * Adds the ability to ask a collection of questions which can then be referenced
   * to and passed through to an appropriate utility.
   *
   * @param {QuestionEntity[]} questions
   * @returns {Promise<any>}
   */
  protected ask(questions: QuestionEntity[]): Promise<any> {
    return prompt(questions);
  }

  /**
   * Sets the version of Minerva directly from the package.json to ensure the
   * version is always correct. The description is set from an abstract
   * property set on the class extending this abstract.
   */
  private setVersionAndDescription() {
    this.commander
      .version(this.packageJson.version, '-V, --version')
      .description(this.description);
  }
}
