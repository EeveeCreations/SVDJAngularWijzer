import {Injectable} from '@angular/core';
import {Question} from "../model/question.model";
import {QuestionList} from "../model/questionList.model";
import {ApiService} from "../api/api.service";
import {firstValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CalculateQuestionServiceService {

  questionList: QuestionList;

  constructor(private apiService: ApiService) {
    this.questionList = new QuestionList();
    this.apiService.getFromApi('question/all').subscribe((data: Question[]) => {
      this.questionList.remainingQuestions = data;
    });
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

  async getQuestionsFromApi() {
    return await firstValueFrom(this.apiService.getFromApi('question/all'));
  }
}
