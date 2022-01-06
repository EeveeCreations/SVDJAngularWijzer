import {Component, Input, OnInit} from '@angular/core';
import {Grant} from "../../shared/model/grant.model";

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {
  // @Input()
  grant: Grant = new Grant("Cool Grant","This is one of the coolest gRants you have ever seen.","02-01-2022","23-04-2022","https://www.svdj.nl/regeling/exploitatieregeling/");

  constructor() { }

  ngOnInit(): void {
  }

  isDateNow() {
    return false;
  }
}
