import { Answer } from "./answer.model";

export class Question {

  public constructor(public questionID: bigint, public questionText: string, public answers: Answer[], public extraInfoTile: string, public extraInfoDescription: string, public extraInfoVideoURL: string) {
    this.questionID = questionID;
    this.questionText = questionText;
    this.answers = answers;
    this.extraInfoTile = extraInfoTile;
    this.extraInfoDescription = extraInfoDescription;
    this.extraInfoVideoURL = extraInfoVideoURL;
  }

  get _questionID(): bigint {
    return this.questionID;
  }

  set _questionID(value: bigint) {
    this.questionID = value;
  }

  get _questionText(): string {
    return this.questionText;
  }

  set _questionText(value: string) {
    this.questionText = value;
  }

  get _answers(): Answer[] {
    return this.answers;
  }

  set _answers(value: Answer[]) {
    this.answers = value;
  }

  get _extraInfoTile(): string {
    return this.extraInfoTile;
  }

  set _extraInfoTile(value: string) {
    this.extraInfoTile = value;
  }

  get _extraInfoDescription(): string {
    return this.extraInfoDescription;
  }

  set _extraInfoDescription(value: string) {
    this.extraInfoDescription = value;
  }

  get _extraInfoVideoURL(): string {
    return this.extraInfoVideoURL;
  }

  set _extraInfoVideoURL(value: string) {
    this.extraInfoVideoURL = value;
  }
}
