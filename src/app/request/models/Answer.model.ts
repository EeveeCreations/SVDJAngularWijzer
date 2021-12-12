import {Question} from "./Question.model";
import {Category} from "./Category.model";

export class Answer{

  constructor(private answerText: string, private categories: Category[], private questionID: Question) {
    this.answerText = answerText;
    this.categories = categories;
    this.questionID = questionID;
  }

}
