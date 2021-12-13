import {Component, OnInit} from '@angular/core';
import {QuestionModel} from "../question.model";
import {AnswerModel} from "../answer.model";

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  prevQuestions: QuestionModel[] = [];
  questions: QuestionModel[] = [
    new QuestionModel(1,"test Question1", [
      new AnswerModel(11,"test answer1_1", "this is answer1_1 info"),
      new AnswerModel(12,"test answer1_2", "this is answer1_2 info"),
      new AnswerModel(13, "test answer1_3", "this is answer1_3 info")]),
    new QuestionModel(2,"test Question2", [
      new AnswerModel(21,"test answer2_1", "this is answer2_1 info"),
      new AnswerModel(22,"test answer2_2", "this is answer2_2 info"),
      new AnswerModel(23,"test answer2_3", "this is answer2_3 info")]),
    new QuestionModel(3,"test Question3", [
      new AnswerModel(31,"test answer3_1", "this is answer3_1 info"),
      new AnswerModel(32,"test answer3_2", "this is answer3_2 info"),
      new AnswerModel(33,"test answer3_3", "this is answer3_3 info")])
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  onNext() {
    if (typeof this.questions !== 'undefined' && this.questions.length > 0) {
      this.prevQuestions.push(this.questions.shift());
    } else {
      //should show result page if there are no questions left
      console.log("question array in question-screen.component.ts is empty");
    }
  }

  onPrevious() {
    if (this.prevQuestions.length !== 0) {
      this.questions.unshift(this.prevQuestions.pop());
    } else {
      console.log("prevQuestion array in question-screen.component.ts is empty");
    }
  }

}
