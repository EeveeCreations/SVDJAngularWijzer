import {Component, Input, OnInit} from '@angular/core';
import {ResultModel} from "./result-model/result.model";

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.css']
})
export class ResultListItemComponent implements OnInit {
  @Input('result-item') result: ResultModel;

  constructor() { }

  ngOnInit(): void {
  }

}
