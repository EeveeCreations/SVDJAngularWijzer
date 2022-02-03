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

  allGrants: Grant[];

  popup: boolean = false;

  constructor(private startRequestService : StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfAdvice("GET", "all", null).subscribe(response => {
      this.advices = response;
    })

    this.getAllGrants();
  }

  getAllGrants() {
    this.startRequestService.makeRequestOfGrant("GET", "all", null).subscribe(response => {
      this.allGrants = response;
    })
  }

  newAdvice() {
    this.errorLabel = "";
    this.getAllGrants();
    this.currentAdvice = new Advice(null, null, null, [])
  }

  editAdvice(advice: Advice) {
    this.errorLabel = "";
    this.currentAdvice = advice;
    this.checkGrants();
  }

  saveAdvice() {
    if (!this.currentAdvice._name || this.currentAdvice._name === "") {
      this.errorLabel = "Het invullen van een naam is verplicht";
      return;
    }

    let specific = "";
    if (this.currentAdvice._adviceID != null) {
      specific = this.currentAdvice._adviceID.toString();
    }
    this.startRequestService.makeRequestOfAdvice("put", specific, this.currentAdvice).subscribe(response => {
      location.reload();
    })
  }

  deleteAdvice() {
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }

  confirmDeletion() {
    this.startRequestService.makeRequestOfAdvice("delete", this.currentAdvice._adviceID.toString(), this.currentAdvice).subscribe(response => {
      location.reload();
    })
  }

  closeAdvice() {
    this.currentAdvice = null;
    this.getAllGrants();
  }

  addGrant(grant: Grant) {
    this.currentAdvice.grants.push(grant);
    
    for(let i = 0; i < this.allGrants.length; i++) {
      if (this.allGrants[i].grantID === grant.grantID) {
        this.allGrants.splice(i, 1);
      }
    }
  }

  removeGrant(grant: Grant) {
    this.allGrants.push(grant);

    for(let i = 0; i < this.currentAdvice.grants.length; i++) {
      if (this.currentAdvice.grants[i].grantID === grant.grantID) {
        this.currentAdvice.grants.splice(i, 1);
      }
    }
  }

  checkGrants() {
    this.startRequestService.makeRequestOfGrant("GET", "all", null).subscribe(response => {
      this.allGrants = response;

      this.currentAdvice.grants.forEach(grant => {
        for(let i = 0; i < this.allGrants.length; i++) {
          if (this.allGrants[i].grantID === grant.grantID) {
            this.allGrants.splice(i, 1);
          }
        }
      })
    })
  }
}
