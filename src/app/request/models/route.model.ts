import {Result} from "./Result.model";
import {Answer} from "./Answer.model";

export class Route{
  private givenAnswers:[];

  constructor(private routeID: bigint, private _totalTime: number, private _resultID: Result) {
  this._totalTime = _totalTime;
  this._resultID = _resultID;
  this.givenAnswers = []
}

  get totalTime(): number {
    return this._totalTime;
  }

  get resultID(): Result {
    return this._resultID;
  }
}
