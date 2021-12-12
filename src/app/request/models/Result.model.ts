import {Time} from "@angular/common";

export class Result {
  constructor(private resultID: bigint, private amountQuestions: number, private totalTime: Time) {
    this.resultID = resultID;
    this.amountQuestions = amountQuestions;
    this.totalTime = totalTime;
  }
}
