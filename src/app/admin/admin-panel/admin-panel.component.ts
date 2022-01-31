import { Component, OnInit } from '@angular/core';
import {Advice} from "../../shared/models/advice.model";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  commonAdvice: Advice;

  constructor() { }

  ngOnInit(): void {
  }

}
