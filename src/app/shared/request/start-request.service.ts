import {Injectable} from '@angular/core';
import {Request} from "./request.model";
import {RequestService} from "./request.service";
import {User} from "../models/user.model";
import { Grant } from '../models/grant.model';
import { Advice } from '../models/advice.model';

@Injectable({providedIn: 'root'})
export class StartRequestService {
  //TODO: Remove the part after =
  currentUser: User = new User(1, "brandon", "password", "yes");

  constructor(private requestService: RequestService) {
  }


  public establishConnection() {
    let request: Request = new Request(1, "GET", "all", null, false)
    this.requestService.sendRequestGrant(request)
      .subscribe(response => {
      });
  }

  public makeRequestOfGrant(duty: string, specific: string, variables?: Grant) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestGrant(request);
  }

  public makeRequestOfAnswer(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestAnswer(request);
  }

  public makeRequestOfQuestion(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestQuestion(request);
  }

  public makeRequestOfRoute(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestRoute(request);
  }

  public makeRequestOfResult(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestResult(request);
  }

  public makeRequestOfGivenAnswer(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestGivenAnswer(request);
  }

  public makeRequestOfCategory(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestCategory(request);
  }

  public makeRequestOfAdvice(duty: string, specific: string, variables?: Advice) {
    const request: Request = new Request(this.currentUser.id, duty, specific, variables, false);
    return this.requestService.sendRequestAdvice(request);
  }
}
