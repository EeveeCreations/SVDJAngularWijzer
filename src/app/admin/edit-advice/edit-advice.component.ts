import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/app/shared/models/advice.model';
import { Grant } from 'src/app/shared/models/grant.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-edit-advice',
  templateUrl: './edit-advice.component.html',
  styleUrls: ['./edit-advice.component.css']
})
export class EditAdviceComponent implements OnInit {
  advices : Advice[] = [];

  currentAdvice: Advice;
  errorLabel: String;

  popup: boolean = false;

  constructor(private startRequestService : StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfAdvice("GET", "all", null).subscribe(response => {
      this.advices = response;
    })
  }

  newAdvice() {
    this.errorLabel = "";
    this.currentAdvice = new Advice(null, null, null, null)
  }

  editAdvice(advice: Advice) {
    this.errorLabel = "";
    this.currentAdvice = advice;
  }

  saveAdvice() {
    // TODO: save
  }

  deleteAdvice() {
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }

  confirmDeletion() {
    // TODO: delete
  }
}
