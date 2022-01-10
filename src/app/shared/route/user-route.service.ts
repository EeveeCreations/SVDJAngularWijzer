import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {Grant} from "../models/grant.model";
import {Route} from "../models/route.model";

@Injectable({providedIn: 'root'})
export class UserRouteService implements OnInit{
  updatedRoute: Subject<Route>;
  private possibleEndings: Grant[];

  ngOnInit(): void {
    this.makeRoute();
  }

  private makeRoute() {

  }


  getPossibleEndings(): Grant[] {
    return this.possibleEndings.slice();
  }
}
