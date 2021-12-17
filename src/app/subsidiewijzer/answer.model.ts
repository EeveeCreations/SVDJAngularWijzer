export class AnswerModel{

  id: number;
  answer: string;
  extraInfo: string;

  constructor(id: number, answer: string, extraInfo: string) {
    this.id = id;
    this.answer = answer;
    this.extraInfo = extraInfo;
  }
}
