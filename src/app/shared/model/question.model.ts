import {Answer} from "./answer.model";

export class Question {
  questionID: bigint;
  questionText: string;
  answers: Answer[];
  extraInfoTile: string;
  extraInfoDescription: string
  extraInfoVideoURL: string;

  constructor(questionID: bigint, questionText: string, answers: Answer[], extraInfoTile: string, extraInfoDescription: string, extraInfoVideoURL: string) {
    this.questionID = questionID;
    this.questionText = questionText;
    this.answers = answers;
    this.extraInfoTile = extraInfoTile;
    this.extraInfoDescription = extraInfoDescription;
    this.extraInfoVideoURL = extraInfoVideoURL;
  }
}
