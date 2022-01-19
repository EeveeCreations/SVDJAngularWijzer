import { Component, Input, OnInit } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';

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

}
