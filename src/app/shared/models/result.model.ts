import {Time} from "@angular/common";

export class Result {

  constructor(private _resultID: number,
              private _amountQuestions: number,
              private _totalTime: string) {
    this._resultID = _resultID;
    this._amountQuestions = _amountQuestions;
    this._totalTime = _totalTime;
  }

  //Getters And setters
  get resultID(): number {
    return this._resultID;
  }

  set resultID(value: number) {
    this._resultID = value;
  }

  get amountQuestions(): number {
    return this._amountQuestions;
  }

  set amountQuestions(value: number) {
    this._amountQuestions = value;
  }

  get totalTime(): string {
    return this._totalTime;
  }

  set totalTime(value: string) {
    this._totalTime = value;
  }
}
