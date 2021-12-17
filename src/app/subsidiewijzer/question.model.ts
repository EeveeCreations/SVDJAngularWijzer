import {AnswerModel} from "./answer.model";

export class QuestionModel {

  id: number;
  question: string;
  answers: AnswerModel[] = [];

  constructor(id: number, question: string, answers: AnswerModel[]) {
    this.id = id;
    this.question = question;
    this.answers = answers;
  }
}
