import {Category} from "./category.model";

export class Answer {
  answerId: bigint;
  answerText: string;
  categories: Category[];

  constructor(answerId: bigint, answerText: string, categories: Category[]) {
    this.answerId = answerId;
    this.answerText = answerText;
    this.categories = categories;
  }
}
