import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  openMenu() {
    document.getElementById("sideNav").style.left = "0";
  }

  closeMenu() {
    document.getElementById("sideNav").style.left = "-400px";
  }

  logOut() {
    this.authService.logOut();
    this.closeMenu();
    this.router.navigate(['./login'],{relativeTo: this.activeRoute});
  }
}
