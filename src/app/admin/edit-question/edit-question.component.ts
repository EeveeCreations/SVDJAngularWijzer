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
    this.currentQuestion.answers.push(new Answer(null, null, null, null, null));
  }

  saveQuestion() {
    this.errorLabel = "";

    if (this.currentQuestion.questionText === null || this.currentQuestion.questionText === "") {
      this.errorLabel = "Vul graag een vraag in";
      return;
    }

    if (this.currentQuestion.answers.length < 2) {
      this.errorLabel = "Een vraag moet minimaal 2 antwoorden bevatten";
      return;
    }

    this.currentQuestion.answers.forEach(answer => {

      if (answer.answerText === null || answer.answerText === "") {
        this.errorLabel = "Vul graag een antwoord in";
        return;
      }

      if (answer.nextQuestion === null) {
        if (answer.advice === null) {
          this.errorLabel = "Geef graag een referentie mee"
          return;
        }
        console.log(answer.answerText + " : " + answer.advice.name);
        return;
      }
      console.log(answer.answerText + " : " + JSON.stringify(answer.nextQuestion));
    });

    
  }

  changeNextQuestion(i: number, questionID: bigint) {
    this.startRequestService.makeRequestOfQuestionItem("get", questionID.toString(), null).subscribe(response => {
      this.currentQuestion.answers[i].nextQuestion = response;
      this.currentQuestion.answers[i].advice = null;
    });
  }

  changeNextAdvice(i: number, adviceID: bigint) {
    this.startRequestService.makeRequestOfAdviceItem("get", adviceID.toString(), null).subscribe(response => {
    this.currentQuestion.answers[i].advice = response;
    this.currentQuestion.answers[i].nextQuestion = null;
    });
  }

  deleteQuestion() {

  }

  closePopup() {

  }

  confirmDeletion() {

  }
}
