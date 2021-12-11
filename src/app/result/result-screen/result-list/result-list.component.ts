import {Component, OnInit} from '@angular/core';
import {ResultModel} from "./result-list-item/result-model/result.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: ResultModel[] = [
    new ResultModel("TalentOntwikkeling", "De subsidieregeling talentontwikkeling is bedoeld om binnen de mediasector onderzoeksjournalistiek een impuls te geven via training, begeleiding, werkervaring of specialisatie. Om de kwaliteit van de onderzoeksjournalistiek in Nederland op niveau te houden en meer journalisten de kans te bieden zich te bekwamen in dit specifieke deel van het vak, richten we ons op mediaorganisaties die hun expertise op dit vlak verder willen delen.", "https://www.svdj.nl/regeling/talentontwikkeling/"),
    new ResultModel("testname1", "testdescription1", "https://www.svdj.nl/"),
    new ResultModel("testname2", "testdescription2", "https://youtu.be/dQw4w9WgXcQ"),
    new ResultModel("testname3", "testdescription3", "https://www.svdj.nl/"),
    new ResultModel("testname4", "testdescription4", "https://www.svdj.nl/")
  ];

  constructor() {
  }

  ngOnInit(): void {
    /*
    for each result:
    addResult(result)
     */
  }

  addResult(resultModel: ResultModel) {
    this.results.push(resultModel);
  }
}
