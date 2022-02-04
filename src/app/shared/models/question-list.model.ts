import {Question} from "./question.model";

export class QuestionList{
  private _remainingQuestions: Question[];
  private _previousQuestions: Question[];

  constructor() {
    this._remainingQuestions = [];
    this._previousQuestions = [];
  }


  get remainingQuestions(): Question[] {
    return this._remainingQuestions;
  }

  set remainingQuestions(value: Question[]) {
    this._remainingQuestions = value;
  }

  get previousQuestions(): Question[] {
    return this._previousQuestions;
  }

  set previousQuestions(value: Question[]) {
    this._previousQuestions = value;
  }
}
