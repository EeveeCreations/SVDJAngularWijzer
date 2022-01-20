import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';
import { Grant } from 'src/app/shared/models/grant.model';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {
  @Input() advices: Advice[];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentAdvice(adviceID: bigint, name: string, description: string, grants: Grant[]) {
    let advice: Advice = new Advice(adviceID, name, description, grants);
    this.onAdviceSelected.emit(advice);
  }

  @Output() onAdviceSelected = new EventEmitter<Advice>();
}
