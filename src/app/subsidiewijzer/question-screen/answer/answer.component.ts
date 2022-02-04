import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answers: Answer[];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectAnswer(answerID: bigint) {
    this.onSelect.emit(answerID);
  }

  @Output() onSelect = new EventEmitter<bigint>();
}
