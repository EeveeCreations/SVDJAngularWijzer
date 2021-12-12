import {Result} from "./Result.model";
import {Answer} from "./Answer.model";

export class Route{
  private givenAnswers:  Answer[];

  constructor(private totalTime: number, private resultID: Result) {
  this.totalTime = totalTime;
  this.resultID = resultID;
  this.givenAnswers = []
}
}
