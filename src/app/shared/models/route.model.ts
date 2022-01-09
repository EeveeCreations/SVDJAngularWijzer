import {Result} from "./Result.model";
import {Answer} from "./Answer.model";

export class Route{
  private _givenAnswers:[];

  constructor(private _routeId: number,
              private _totalTime: number,
              private _resultID: Result) {
    this._totalTime = _totalTime;
    this._resultID = _resultID;
    this._givenAnswers = []
  }

  get totalTime(): number {
    return this._totalTime;
  }

  get resultID(): Result {
    return this._resultID;
  }


  get givenAnswers(): [] {
    return this._givenAnswers;
  }

  set givenAnswers(value: []) {
    this._givenAnswers = value;
  }

  get routeID(): number {
    return this._routeId;
  }

  set routeID(value: number) {
    this._routeId = value;
  }
}
