import { GivenAnswer } from "./given-answer.model";
import {Result} from "./Result.model";

export class Route{

  constructor(private _routeID: bigint, private _totalTime: number, private _resultID: Result, private _givenAnswers: GivenAnswer[]) {
    this._routeID = _routeID;
    this._totalTime = _totalTime;
    this._resultID = _resultID;
    this._givenAnswers = _givenAnswers;
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
  public get givenAnswers() : GivenAnswer[] {
    return this._givenAnswers;
  }
  public set givenAnswers(v : GivenAnswer[]) {
    this._givenAnswers = v;
  }
  
}
