import {Category} from "../model/category.model";
import {Question} from "../model/question.model";


export class Answer{

  constructor(private _answerID:bigint, private _answerText: string, private _categories: Category[], private _questionID: Question) {
    this._answerID = _answerID;
    this._answerText = _answerText;
    this._categories = _categories;
    this._questionID = _questionID;
  }

  //Getters And setters
  get answerID(): bigint {
    return this._answerID;
  }

  set answerID(value: bigint) {
    this._answerID = value;
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
