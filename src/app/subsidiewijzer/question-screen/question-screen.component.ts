import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api/api.service";
import {UserRouteService} from "../../shared/route/user-route.service";
import {Question} from "../../shared/models/question.model";

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css'],
  providers: [UserRouteService]
})
export class QuestionScreenComponent implements OnInit {
  prevQuestions: Question[] = [];
  questions: Question[] = []


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getFromApi("question/all").subscribe((data: Question[]) => {
      this.setQuestions(data)
    })
  }

  onNext() {
    if (this.questions.length !== 1) {
      this.prevQuestions.push(this.questions.shift());
      console.log(this.questions)
    } else {
      //should show result page if there are no questions left
      console.log("question array in question-screen.component.ts is empty");
      //TODO: link to resultpage
    }
  }

  onPrevious() {
    if (this.prevQuestions.length !== 0) {
      this.questions.unshift(this.prevQuestions.pop());
    } else {
      console.log("prevQuestion array in question-screen.component.ts is empty");
    }
  }

  private setQuestions(value: Question[]) {
    this.questions = value;
  }

}
