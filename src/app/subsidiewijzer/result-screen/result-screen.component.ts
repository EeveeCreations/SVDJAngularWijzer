import {Component, Input, OnInit} from '@angular/core';
import {Grant} from "../../shared/model/grant.model";
import {PrintResultService} from "./print-result.service";
import {CalculateResultService} from "../../shared/result/calculate-result.service";

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css'],
  providers: [PrintResultService]
})
export class ResultScreenComponent implements OnInit {
  // @Input() grant: Grant;
  grant: Grant = new Grant("Cool Grant","This is one of the coolest grants you have ever seen.","02-01-2022","23-04-2022","https://www.svdj.nl/regeling/exploitatieregeling/");

  constructor() { }

  ngOnInit(): void {
  }

  isDateNow() {
    return false;
  }

  OnClickPrint() {

  }
}
