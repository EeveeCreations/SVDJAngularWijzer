import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Request} from "./request.model";
import {Injectable} from "@angular/core";
import {Route} from "@angular/router";
import {GivenAnswer} from "../models/given-answer.model";
import {Grant} from "../models/grant.model";
import {Result} from "../models/result.model";
import {Advice} from "../models/advice.model";
import {Answer} from "../models/answer.model";
import {Question} from "../models/question.model";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string;

  constructor(private http: HttpClient) {}

  giveCorrectHeadingToRequest(readyRequest: Request): HttpHeaders {
    const headerOfRequest: HttpHeaders = new HttpHeaders({
      contentType: 'application/json',
      accept: 'application/json',
      origin: 'http://localhost:4200/'
    });
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

  sendRequestQuestionItem(request: Request) {
    this.setConnectionSpecifics("question", request.specific);
    return this.http.request<Question>(request.duty, this.url, {
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

  sendRequestAnswerItem(request: Request) {
    this.setConnectionSpecifics("answer", request.specific);
    return this.http.request<Answer>(request.duty, this.url, {
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

  sendRequestAdvice(request: Request) {
    this.setConnectionSpecifics("advice", request.specific);
    return this.http.request<Advice[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
    })
  }
  
  sendRequestAdviceItem(request: Request) {
    this.setConnectionSpecifics("advice", request.specific);
    return this.http.request<Advice>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }
}
