import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
