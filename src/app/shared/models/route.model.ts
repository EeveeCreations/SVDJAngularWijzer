import {Result} from "./Result.model";

export class Route{
  private givenAnswers:[];

  constructor(private _routeID: bigint, private _totalTime: number, private _resultID: Result) {
    this._routeID = _routeID;
    this._totalTime = _totalTime;
    this._resultID = _resultID;
    this.givenAnswers = []
    //TODO: wait for backend to export givenAnswers and implement this
  }

  public get routeID() : bigint {
    return this._routeID;
  }
  public set routeID(v : bigint) {
    this._routeID = v;
  }
  
  public get totalTime() : number {
    return this._totalTime;
  }
  public set totalTime(v : number) {
    this._totalTime = v;
  }
  
  public get resultID() : Result {
    return this._resultID;
  }
  public set resultID(v : Result) {
    this._resultID = v;
  }
}
