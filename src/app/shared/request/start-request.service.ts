import {Injectable} from '@angular/core';
import {Request} from "./request.model";
import {RequestService} from "./request.service";
import { Grant } from '../models/grant.model';
import { Advice } from '../models/advice.model';
import {AuthService} from "../service/auth.service";
import {Subscription} from "rxjs";
import {Admin} from "../models/admin.model";

@Injectable({providedIn: 'root'})
export class StartRequestService {
  currentAdmin: Admin = null;
  private adminSubscription: Subscription;

  constructor(private requestService: RequestService,
              private authService: AuthService) {
    this.findIfRegistered();
  }


  private findIfRegistered() {
    this.adminSubscription = this.authService.admin.subscribe(admin => {
      this.currentAdmin = admin;
    });
  }



  public establishConnection() {
    let request: Request = new Request("", "GET", "all", null, false)
    this.requestService.sendRequestGrant(request)
      .subscribe(response => {
      });
  }

  public makeRequestOfGrant(duty: string, specific: string, variables?: Grant) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestGrant(request);
  }

  public makeRequestOfAnswer(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestAnswer(request);
  }

  public makeRequestOfQuestion(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestQuestion(request);
  }

  public makeRequestOfRoute(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestRoute(request);
  }

  public makeRequestOfGivenAnswer(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestGivenAnswer(request);
  }

  public makeRequestOfAdvice(duty: string, specific: string, variables?: Advice) {
    const request: Request = new Request(this.currentAdmin.token, duty, specific, variables, false);
    return this.requestService.sendRequestAdvice(request);
  }
}
