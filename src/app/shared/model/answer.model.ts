import {Category} from "./category.model";

export class Answer {
  answerID: bigint;
  answerText: string;
  category: Category[];

  constructor(answerID: bigint, answerText: string, category: Category[]) {
    this.answerID = answerID;
    this.answerText = answerText;
    this.category = category;
  }
}
