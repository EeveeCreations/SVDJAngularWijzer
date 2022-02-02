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
  returnValue: boolean = false;

  currentQuestion: Question;
  errorLabel: String;

  popup: boolean = false;

  constructor(private startRequestService: StartRequestService) {}

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

  removeAnswer(i: number) {
    if (this.currentQuestion.answers.length < 3) {
      this.errorLabel = "Er moeten minimaal 2 antwoorden in een vraag zitten, pas deze aan";
      return;
    }

    if (this.currentQuestion.answers[i].answerID !== null) {
      this.startRequestService.makeRequestOfAnswer("delete", this.currentQuestion.answers[i].answerID.toString(), this.currentQuestion.answers[i]).subscribe(response => {
      })
    }
    
    this.currentQuestion.answers.splice(i, 1);
  }

  saveQuestion() {
    if (this.checkFields()) {
      return;
    }

    let specific = "";
    if (this.currentQuestion.questionID != null) {
      specific = this.currentQuestion.questionID.toString();
    }

    this.currentQuestion.answers.forEach((answer, i) => {
      this.currentQuestion.answers[i] = new Answer(answer.answerID, answer.answerText, answer.parentQuestionID, answer.nextQuestion, answer.advice);

      let specificAns = "";
      if (answer.answerID!= null) {
        specificAns = answer.answerID.toString();
      }
      this.startRequestService.makeRequestOfAnswerItem("put", specificAns, this.currentQuestion.answers[i]).subscribe(response => {
        this.currentQuestion.answers[i] = new Answer(response.answerID, response.answerText, response.parentQuestionID, response.nextQuestion, response.advice);
      });
    });

    this.startRequestService.makeRequestOfQuestion("put", specific, this.currentQuestion).subscribe(response => {
      location.reload();
    });
  }

  checkFields(): boolean {
    this.errorLabel = "";
    this.returnValue = false;

    if (this.currentQuestion.questionText === null || this.currentQuestion.questionText === "") {
      this.errorLabel = "Vul graag een vraag in";
      this.returnValue = true;
    }

    if (this.currentQuestion.answers.length < 2) {
      this.errorLabel = "Een vraag moet minimaal 2 antwoorden bevatten";
      this.returnValue = true;
    }

    this.currentQuestion.answers.forEach(answer => {

      if (answer.answerText === null || answer.answerText === "") {
        this.errorLabel = "Vul graag een antwoord in";
        this.returnValue = true;
      }

      if (answer.nextQuestion === null) {
        if (answer.advice === null) {
          this.errorLabel = "Geef graag een referentie mee"
          this.returnValue = true;
        }
      }
    });

    if ((((this.currentQuestion.extraInfoDescription === null) === (this.currentQuestion.extraInfoDescription === "")) ||
        ((this.currentQuestion.extraInfoVideoURL === null) === (this.currentQuestion.extraInfoVideoURL === ""))) &&
      ((this.currentQuestion.extraInfoTile === null) !== (this.currentQuestion.extraInfoTile === ""))) {
      this.errorLabel = "Een titel is verplicht als er extra informatie word meegegeven"
      this.returnValue = true;
    }

    return this.returnValue;
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
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }

  confirmDeletion() {
    this.startRequestService.makeRequestOfQuestion("delete", this.currentQuestion.questionID.toString(), this.currentQuestion).subscribe(response => {
      location.reload();
    })
  }

  closeQuestion() {
    this.currentQuestion = null;
  }
}