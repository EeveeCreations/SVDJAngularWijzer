import {Time} from "@angular/common";
import { Advice } from "./advice.model";

export class Result {

  constructor(private _resultID: bigint, private _amountQuestions: number, private _totalTime: Time, private _advice: Advice) {
    this._resultID = _resultID;
    this._amountQuestions = _amountQuestions;
    this._totalTime = _totalTime;
    this._advice = _advice;
  }

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

  public get advice() : Advice {
    return this._advice;
  }
  public set advice(v : Advice) {
    this._advice = v;
  }
}
