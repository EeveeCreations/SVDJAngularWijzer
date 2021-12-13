import {Category} from "./category.model";
export class Answer {
  answerID: bigint;
  answerText: string;
  category: Category[];
}
