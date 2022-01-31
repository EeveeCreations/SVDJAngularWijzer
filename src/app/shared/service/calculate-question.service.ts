import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";
import {tap} from "rxjs";
import {Question} from "../models/question.model";
import {QuestionList} from "../models/question-list.model";


@Injectable({
  providedIn: 'root'
})
export class CalculateQuestionService {

  questionList: QuestionList;

  constructor(private apiService: ApiService) {
    this.questionList = new QuestionList();
    // this.apiService.getFromApi('question/all').subscribe((data: Question[]) => {
    //   this.questionList.remainingQuestions = data;
    // });
  }

  getNextQuestion(): Question {
    if (this.questionList.remainingQuestions.length !== 1) {
      this.questionList.previousQuestions.push(this.questionList.remainingQuestions.shift());
    }
    return this.questionList.remainingQuestions[0];
  }

  getPreviousQuestion(): Question {
    if (this.questionList.previousQuestions.length !== 0) {
      this.questionList.remainingQuestions.unshift(this.questionList.previousQuestions.pop());
    }
    return this.questionList.remainingQuestions[0];
  }

  getFirstQuestion(): Question {
    return this.questionList.remainingQuestions[0];
  }

  getQuestionsFromApi() {
    return this.apiService.getQuestions('question/all')
      .pipe(
        tap(
          (
            (questions: Question[]) => {
              this.questionList.remainingQuestions = questions.slice();
            }
          )
        )
      );
  }
}
