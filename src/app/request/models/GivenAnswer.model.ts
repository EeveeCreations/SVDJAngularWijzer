import {Question} from "./Question.model";
import {Answer} from "./Answer.model";

export class GivenAnswer {

  constructor(private _givenAnswerID: bigint, private _elapsedSeconds: number, private _questionID: Question, private _answerID: Answer) {
    this._givenAnswerID = _givenAnswerID;
    this._elapsedSeconds = _elapsedSeconds;
    this._questionID = _questionID;
    this._answerID = _answerID;
  }
  //Getters and Setters
  get givenAnswerID(): bigint {
    return this._givenAnswerID;
  }

  set givenAnswerID(value: bigint) {
    this._givenAnswerID = value;
  }

  get elapsedSeconds(): number {
    return this._elapsedSeconds;
  }

  set elapsedSeconds(value: number) {
    this._elapsedSeconds = value;
  }

  get questionID(): Question {
    return this._questionID;
  }

  set questionID(value: Question) {
    this._questionID = value;
  }

  get answerID(): Answer {
    return this._answerID;
  }

  set answerID(value: Answer) {
    this._answerID = value;
  }
}
