import { Component, Input, OnInit } from '@angular/core';
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

}
