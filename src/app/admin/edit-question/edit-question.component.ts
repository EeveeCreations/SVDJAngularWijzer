import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/model/question.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  questions: Question[] = [];

  currentQuestion: Question;
  errorLabel: String;

  constructor(private startRequestService: StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfQuestion("get", "all", null).subscribe(response => {
      this.questions = response;
    })
  }

  newQuestion() {
    this.errorLabel = "";
    this.currentQuestion = new Question(null, null, null, null, null, null);
  }

  editQuestion(question: Question) {
    this.errorLabel = "";
    this.currentQuestion = question;
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
