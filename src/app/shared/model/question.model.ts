import {Answer} from "./answer.model";

export class Question {
  questionId: bigint;
  questionText: string;
  answers: Answer[];
  extraInfoTile: string;
  extraInfoDescription: string
  extraInfoVideoURL: string;

  constructor(questionId: bigint, questionText: string, answers: Answer[], extraInfoTile: string, extraInfoDescription: string, extraInfoVideoURL: string) {
    this.questionId = questionId;
    this.questionText = questionText;
    this.answers = answers;
    this.extraInfoTile = extraInfoTile;
    this.extraInfoDescription = extraInfoDescription;
    this.extraInfoVideoURL = extraInfoVideoURL;
  }
}
