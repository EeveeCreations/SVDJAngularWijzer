import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api/api.service";
import {Question} from "../shared/model/question.model";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private questions:Question[]
  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
 this.service.getQuestionFromApi("question/all").subscribe((data: Question[])=>{
   this.setQuestions(data)
   })
  }

 private setQuestions(value: Question[]) {
    this.questions = value;
  }

  get getQuestions(): Question[] {
    return this.questions;
  }
}
