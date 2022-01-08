import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {Grant} from "../model/grant.model";

@Injectable()
export class RouteService implements OnInit{
  // updatedRoute: Subject<Route>;
  updatedRoute: Subject<any>;
  private possibleRoutes: Grant[];

  ngOnInit(): void {
    this.makeRoute();
  }

  private makeRoute() {

  }


  getPossibleRoutes() {
    return this.possibleRoutes.slice();
  }
}
