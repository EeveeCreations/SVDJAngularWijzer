import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private startRequestService: StartRequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfQuestion("get", "all", null).subscribe(response => {
      console.log(response[0]);
      
      this.questions = response;
      this.currentQuestion = response[0];
    })

  }

  onNext() {
    console.log(this.currentQuestion.extraInfoTile);
    console.log(this.currentQuestion);
    
    
    this.errorLabel = "";
    if (this.selectedAnswer === null) {
      this.errorLabel = "Selecteer graag eerst een antwoord"
      return;
    }

    if (this.selectedAnswer.nextQuestion !== null) {
      this.currentQuestion = this.selectedAnswer.nextQuestion;
      this.previousQuestions.push(this.selectedAnswer.nextQuestion);
      this.selectedAnswer = null;
      return;
    }
    this.router.navigate(['subsidiewijzer/advies/' + this.selectedAnswer.advice.adviceID])    
  }

  onPrevious() {
    this.errorLabel = "";
    if(this.previousQuestions.length < 2) {
      this.currentQuestion = this.questions[0];
      this.previousQuestions = [];
      return;
    }

    this.previousQuestions.splice(-1);
    this.currentQuestion = this.previousQuestions[this.previousQuestions.length -1];
  }

  selectAnswer(id: bigint) {
    this.startRequestService.makeRequestOfAnswerItem("get", id.toString(), null).subscribe(response => {
      this.selectedAnswer = response;
    })
    
  }
}
