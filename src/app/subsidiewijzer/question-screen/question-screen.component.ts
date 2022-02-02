import {Component, OnInit} from '@angular/core';
import {CalculateQuestionService} from "../../shared/service/calculate-question.service";
import {Question} from "../../shared/models/question.model";

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  currentQuestion: Question;

  constructor(private questionService: CalculateQuestionService) {
  }

  ngOnInit(): void {
    this.currentQuestion = this.questionService.getFirstQuestion();
    this.questionService.getQuestionsFromApi().subscribe();
  }

  onNext() {
    this.currentQuestion = this.questionService.getNextQuestion();
  }

  onPrevious() {
    this.currentQuestion = this.questionService.getPreviousQuestion();
  }

}
