import {Time} from "@angular/common";

export class Result {

  constructor(private _resultID: bigint, private _amountQuestions: number, private _totalTime: Time) {
    this._resultID = _resultID;
    this._amountQuestions = _amountQuestions;
    this._totalTime = _totalTime;
  }

  //Getters And setters
  get resultID(): bigint {
    return this._resultID;
  }

  set resultID(value: bigint) {
    this._resultID = value;
  }

  get amountQuestions(): number {
    return this._amountQuestions;
  }

  set amountQuestions(value: number) {
    this._amountQuestions = value;
  }

  get totalTime(): Time {
    return this._totalTime;
  }

  set totalTime(value: Time) {
    this._totalTime = value;
  }
}
