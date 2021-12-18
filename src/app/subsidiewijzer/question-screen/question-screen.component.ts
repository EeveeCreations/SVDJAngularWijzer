import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/model/question.model";
import {CalculateQuestionServiceService} from "../../shared/service/calculate-question-service.service";

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  currentQuestion: Question;

  constructor(private questionService: CalculateQuestionServiceService) {
  }

  ngOnInit(): void {
    this.currentQuestion = this.questionService.getFirstQuestion();
  }

  onNext() {
    this.currentQuestion = this.questionService.getNextQuestion();
    console.log("onnext")
  }

  onPrevious() {
    this.currentQuestion = this.questionService.getPreviousQuestion();
    console.log("onprev")
  }

}
