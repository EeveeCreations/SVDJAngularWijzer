import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../shared/models/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
