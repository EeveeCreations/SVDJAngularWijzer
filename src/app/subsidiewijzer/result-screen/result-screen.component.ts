import {Component, Input, OnInit} from '@angular/core';
import {PrintResultService} from "./print-result.service";
import {Grant} from "../../shared/models/grant.model";
import {Category} from "../../shared/models/category.model";
import {ActivatedRoute} from "@angular/router";
import {UserRouteService} from "../../shared/route/user-route.service";
import {GrantService} from "../../shared/grant/grant.service";

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css'],
  providers: [PrintResultService]
})
export class ResultScreenComponent implements OnInit {
  grant: Grant;
  constructor(private activeRoute: ActivatedRoute,
              private routeService: UserRouteService,
              private grantService: GrantService) { }

  ngOnInit(): void {
    this.getGrant();
  }

  private getGrant() {
    this.activeRoute.params.subscribe( param =>{
        const id: number = +param['id'];
        this.grant = this.grantService.getGrant(id);
    })
  }

  isDateNow() {
    return false;
  }

  OnClickPrint() {

  }
}
