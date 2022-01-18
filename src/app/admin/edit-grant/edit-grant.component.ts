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

  constructor(private startRequestService: StartRequestService) { }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfGrant("get", "all", null).subscribe(response => {
      this.grants = response;
    });
  }

  newGrant() {

  }
}
