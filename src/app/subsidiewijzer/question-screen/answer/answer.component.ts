import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../../shared/models/answer.model";

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

}
