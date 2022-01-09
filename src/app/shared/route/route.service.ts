import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {Grant} from "../models/grant";

@Injectable()
export class RouteService implements OnInit{
  // updatedRoute: Subject<Route>;
  updatedRoute: Subject<any>;
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
