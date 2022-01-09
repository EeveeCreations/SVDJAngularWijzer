import {Question} from "./question.model";
import {Answer} from "./answer.model";

export class GivenAnswer {

  constructor(private _givenAnswerId: number,
              private _elapsedSeconds: number,
              private _question: Question,
              private _answer: Answer) {
    this._givenAnswerId = _givenAnswerId;
    this._elapsedSeconds = _elapsedSeconds;
    this._question = _question;
    this._answer = _answer;
  }
  //Getters and Setters
  get givenAnswerId(): number {
    return this._givenAnswerId;
  }

  set givenAnswerId(value: number) {
    this._givenAnswerId = value;
  }

  get elapsedSeconds(): number {
    return this._elapsedSeconds;
  }

  set elapsedSeconds(value: number) {
    this._elapsedSeconds = value;
  }

  get question(): Question {
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get answer(): Answer {
    return this._answer;
  }

  set answer(value: Answer) {
    this._answer = value;
  }
}
