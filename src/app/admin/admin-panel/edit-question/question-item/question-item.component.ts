import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  @Input() questions: Question[];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentQuestion(questionID: bigint, questionText: string, answers: [], Title: string, Description: string, url: string) {
    let question: Question = new Question(questionID, questionText, answers, Title, Description, url);
    this.onQuestionSelected.emit(question);
  }

  @Output() onQuestionSelected = new EventEmitter<Question>();
}
