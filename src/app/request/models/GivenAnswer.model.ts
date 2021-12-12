import {Question} from "./Question.model";
import {Answer} from "./Answer.model";

export class GivenAnswer {

  constructor(private givenAnswerID: bigint, private elapsedSeconds: number, private questionID: Question, private answerID: Answer) {
    this.givenAnswerID = givenAnswerID;
    this.elapsedSeconds = elapsedSeconds;
    this.questionID = questionID;
    this.answerID = answerID;
  }
}
