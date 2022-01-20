import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-edit-advice',
  templateUrl: './edit-advice.component.html',
  styleUrls: ['./edit-advice.component.css']
})
export class EditAdviceComponent implements OnInit {
  advices : Advice[] = [];
  currentAdvice: Advice;

  constructor(private startRequestService : StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfAdvice("GET", "all", null).subscribe(response => {
      this.advices = response;
    })
  }

  newAdvice() {

  }

  saveAdvice() {

  }
}
