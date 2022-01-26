import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  questions: Question[] = [];
  advices: Advice[] = [];

  currentQuestion: Question;
  errorLabel: String;

  constructor(private startRequestService: StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfQuestion("get", "all", null).subscribe(response => {
      this.questions = response;
    });

    this.startRequestService.makeRequestOfAdvice("get", "all", null).subscribe(response => {
      this.advices = response;
    });
  }

  newQuestion() {
    this.errorLabel = "";
    this.currentQuestion = new Question(null, null, [], null, null, null);
  }

  editQuestion(question: Question) {
    this.errorLabel = "";
    this.currentQuestion = question;
  }

  addAnswerToQuestion() {
    this.currentQuestion._answers.push(new Answer(null, null, null, null, null));
  }

  saveQuestion() {
    
  }

  deleteQuestion() {

  }

  closePopup() {

  }

  confirmDeletion() {

  }
}
