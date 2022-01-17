import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    document.getElementById("sideNav").style.left = "0";
  }
  
  closeMenu() {
    document.getElementById("sideNav").style.left = "-400px";
  }
}
