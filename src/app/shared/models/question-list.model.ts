import {Question} from "./question.model";

export class QuestionList{
  get questions(): Question[] {
    return this._questions;
  }

  set questions(value: Question[]) {
    this._questions = value;
  }
  private _questions :Question[]

  constructor(questions: Question[]) {
    this._questions = questions;
  }

}
