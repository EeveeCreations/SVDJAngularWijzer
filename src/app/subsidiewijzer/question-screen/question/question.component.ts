import {Component, Input, OnInit} from '@angular/core';
import {QuestionModel} from "../../question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionModel;

  constructor() { }

  ngOnInit(): void {
  }

}
