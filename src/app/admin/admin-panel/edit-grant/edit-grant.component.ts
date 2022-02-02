import { Component, OnInit } from '@angular/core';
import { Grant } from 'src/app/shared/models/grant.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-edit-grant',
  templateUrl: './edit-grant.component.html',
  styleUrls: ['./edit-grant.component.css']
})
export class EditGrantComponent implements OnInit {
  grants: Grant[] = [];

  currentGrant: Grant;
  errorLabel: String;

  popup: boolean = false;

  constructor(private startRequestService: StartRequestService) {
    // console.log("Grant")
    // Console Ruis weg gecomment
  }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfGrant("get", "all", null).subscribe(response => {
      this.grants = response;
    });
  }

  newGrant() {
    this.errorLabel = "";
    this.currentGrant = new Grant(null, null, null, null, null, null);
  }

  editGrant(grant: Grant) {
    this.errorLabel = "";
    this.currentGrant = grant;
  }

  saveGrant() {
    if (!this.currentGrant._name || this.currentGrant._name === "") {
      this.errorLabel = "Het invullen van een naam is verplicht";
      return;
    }

    let specific = "";
    if (this.currentGrant._grantID != null) {
      specific = this.currentGrant._grantID.toString();
    }
    this.startRequestService.makeRequestOfGrant("put", specific, this.currentGrant).subscribe(response => {
      location.reload();
    });
  }

  deleteGrant() {
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }

  confirmDeletion() {
    this.startRequestService.makeRequestOfGrant("delete", this.currentGrant._grantID.toString(), this.currentGrant).subscribe(response => {
      location.reload();
    })
  }
}
