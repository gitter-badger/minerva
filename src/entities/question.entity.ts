import {QuestionChoiceEntity} from "./question-choice.entity";

export class QuestionEntity {
    public type: string;
    public name: string;
    public message: string;
    public choices?: string[] | QuestionChoiceEntity[];
    public default?: any;
}