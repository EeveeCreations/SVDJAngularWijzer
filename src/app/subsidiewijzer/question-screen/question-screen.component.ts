import {Component, OnInit} from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  currentQuestion: Question;
  questions: Question[];

  previousQuestions: Question[] = [];

  selectedAnswer: Answer = null;
  errorLabel: string = "";

  constructor(private startRequestService: StartRequestService) {
  }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfQuestion("get", "all", null).subscribe(response => {
      this.questions = response;
      this.currentQuestion = response[0];
    })

  }

  onNext() {
    if (this.selectedAnswer === null) {
      this.errorLabel = "Selecteer graag eerst een antwoord"
      return;
    }

    if (this.selectedAnswer.nextQuestion !== null) {
      this.currentQuestion = this.selectedAnswer.nextQuestion;
      return;
    }
    // TODO: redirect to advice page
    
  }

  onPrevious() {
    
  }

  selectAnswer(id: bigint) {
    this.startRequestService.makeRequestOfAnswerItem("get", id.toString(), null).subscribe(response => {
      this.selectedAnswer = response;
    })
    
  }
}
