import {Question} from "../model/question.model";
import {Answer} from "../model/answer.model";

export class GivenAnswer {

  constructor(private _givenAnswerID: bigint, private _elapsedSeconds: number, private _question: Question, private _answer: Answer) {
    this._givenAnswerID = _givenAnswerID;
    this._elapsedSeconds = _elapsedSeconds;
    this._question = _question;
    this._answer = _answer;
  }
  //Getters and Setters
  get givenAnswerId(): bigint {
    return this._givenAnswerID;
  }

  set givenAnswerId(value: bigint) {
    this._givenAnswerID = value;
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
