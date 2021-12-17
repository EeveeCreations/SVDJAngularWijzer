import {Component, Input, OnInit} from '@angular/core';
import {AnswerModel} from "../../answer.model";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answers: AnswerModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
