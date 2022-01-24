import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grant } from 'src/app/shared/models/grant.model';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  @Input() grants: Grant[];

  constructor() { }

  ngOnInit(): void {
  }

  // This trips if you don't take it apart like this trust me.
  setCurrentGrant(grantID: bigint, name: string, description: string) {
    let grant: Grant = new Grant(grantID, name, description, null, null, null);
    this.onGrantSelected.emit(grant);
  }

  @Output() onGrantSelected = new EventEmitter<Grant>();
}
