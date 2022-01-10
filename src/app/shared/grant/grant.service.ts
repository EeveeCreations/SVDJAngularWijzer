import {Injectable} from "@angular/core";
import {Grant} from "../models/grant.model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class GrantService {
  private grants: Grant[];
  grantUpdates: Subject<Grant>;

  constructor() {
  }

  updateGrant(){

  }
  setGrants (grants: Grant[]){
    this.grants = grants;
  }

  getGrants(){
    return this.grants.slice();

  }

  getGrant(id: number) {
    return this.grants[id];
  }
}
