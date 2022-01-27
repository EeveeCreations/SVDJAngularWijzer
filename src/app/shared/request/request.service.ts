import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Request} from "./request.model";
import {Injectable} from "@angular/core";
import {Category} from "../model/category.model";
import {Route} from "@angular/router";
import {Question} from "../model/question.model";
import {Answer} from "../model/answer.model";
import {GivenAnswer} from "../models/given-answer.model";
import {Grant} from "../models/grant.model";
import {Result} from "../models/result.model";
import { Advice } from "../models/advice.model";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string;


  constructor(private http: HttpClient,
  ){
  }


  giveCorrectHeadingToRequest(readyRequest: Request): HttpHeaders {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.append('Content-Type', 'application/json');
    headerOfRequest.append('Accept', 'application/json');
    headerOfRequest.append('Origin', 'http://localhost:4200/');
    headerOfRequest.append('Authorization', "Bearer " + readyRequest.adminToken);
    console.log(headerOfRequest);
    return headerOfRequest;

  }

  setConnectionSpecifics(className: string, specific: string): void {
    this.url = ("https://localhost:8443/" + className.toLowerCase());
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }

  sendRequestGrant(request: Request) {
    this.setConnectionSpecifics("grant", request.specific);
    return this.http.request<Grant[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestQuestion(request: Request) {
    this.setConnectionSpecifics("question", request.specific);
    return this.http.request<Question[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestAnswer(request: Request) {
    this.setConnectionSpecifics("answer", request.specific);
    return this.http.request<Answer[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestGivenAnswer(request: Request) {
    this.setConnectionSpecifics("givenanswer", request.specific);
    return this.http.request<GivenAnswer[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestRoute(request: Request) {
    this.setConnectionSpecifics("route", request.specific);
    return this.http.request<Route[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestResult(request: Request) {
    this.setConnectionSpecifics("result", request.specific);
    return this.http.request<Result[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestCategory(request: Request) {
    this.setConnectionSpecifics("category", request.specific);
    return this.http.request<Category[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestAdvice(request: Request) {
    this.setConnectionSpecifics("advice", request.specific);
    return this.http.request<Advice[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
    })
  }
}
