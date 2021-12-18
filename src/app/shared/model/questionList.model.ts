import {Question} from "./question.model";

export class QuestionList {
  remainingQuestions: Question[];
  previousQuestions: Question[];

  constructor() {
    this.remainingQuestions = [];
    this.previousQuestions = [];
  }



}
