import {Component, OnInit} from '@angular/core';
import {ResultModel} from "./result-list-item/result-model/result.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: ResultModel[] = [
    new ResultModel("testname0", "testdescription0", "https://www.svdj.nl/"),
    new ResultModel("testname1", "testdescription1", "https://www.svdj.nl/"),
    new ResultModel("testname2", "testdescription2", "https://youtu.be/dQw4w9WgXcQ"),
    new ResultModel("testname3", "testdescription3", "https://www.svdj.nl/"),
    new ResultModel("testname4", "testdescription4", "https://www.svdj.nl/")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addResult(resultModel: ResultModel) {
    this.results.push(resultModel);
  }
}
