import {Category} from "./category.model";
import {Question} from "./question.model";


export class Answer{

  constructor(private _answerId: number,
              private _answerText: string,
              private _categories: Category[],
              private _questionID: Question) {
    this._answerId = _answerId;
    this._answerText = _answerText;
    this._categories = _categories;
    this._questionID = _questionID;
  }

  //Getters And setters
  get answerID(): number {
    return this._answerId;
  }

  set answerID(value: number) {
    this._answerId = value;
  }

  get answerText(): string {
    return this._answerText;
  }

  set answerText(value: string) {
    this._answerText = value;
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get questionID(): Question {
    return this._questionID;
  }

  set questionID(value: Question) {
    this._questionID = value;
  }
}
