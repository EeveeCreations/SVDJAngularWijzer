import {Injectable} from '@angular/core';
import {Request} from "./request.model";
import {RequestService} from "./request.service";
import {Grant} from '../models/grant.model';
import {Advice} from '../models/advice.model';
import {AuthService} from "../service/auth.service";
import {Subscription} from "rxjs";
import {Admin} from "../models/admin.model";
import {Answer} from "../models/answer.model";
import {Question} from "../models/question.model";

@Injectable({providedIn: 'root'})
export class StartRequestService {
  currentAdmin: Admin = null;
  private adminSubscription: Subscription;
  private adminToken: string = "NoToken";

  constructor(private requestService: RequestService,
              private authService: AuthService) {
    this.findIfRegistered();
  }

  private findIfRegistered() {
    this.adminSubscription = this.authService.admin.subscribe(admin => {
      this.currentAdmin = admin;
      this.adminToken = this.currentAdmin.token

    });
  }

  public establishConnection() {
    let request: Request = new Request("", "GET", "all", null, false)
    this.requestService.sendRequestGrant(request)
      .subscribe(response => {
      });
  }

  public makeRequestOfGrant(duty: string, specific: string, variables?: Grant) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestGrant(request);
  }

  public makeRequestOfAnswer(duty: string, specific: string, variables?: Answer) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestAnswer(request);
  }

  public makeRequestOfAnswerItem(duty: string, specific: string, variables?: Answer) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestAnswerItem(request);
  }

  public makeRequestOfQuestion(duty: string, specific: string, variables?: Question) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestQuestion(request);
  }

  public makeRequestOfQuestionItem(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestQuestionItem(request);
  }

  public makeRequestOfRoute(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestRoute(request);
  }

  public makeRequestOfGivenAnswer(duty: string, specific: string, variables?: []) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestGivenAnswer(request);
  }

  public makeRequestOfAdvice(duty: string, specific: string, variables?: Advice) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestAdvice(request);
  }

  public makeRequestOfAdviceItem(duty: string, specific: string, variables?: Advice) {
    const request: Request = new Request(this.adminToken, duty, specific, variables, false);
    return this.requestService.sendRequestAdviceItem(request);
  }
}
