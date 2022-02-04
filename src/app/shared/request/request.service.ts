import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Request} from "./request.model";
import {Injectable} from "@angular/core";
import {Route, Router} from "@angular/router";
import {GivenAnswer} from "../models/given-answer.model";
import {Grant} from "../models/grant.model";
import {Result} from "../models/result.model";
import {Advice} from "../models/advice.model";
import {Answer} from "../models/answer.model";
import {Question} from "../models/question.model";
import {catchError, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string;


  constructor(private http: HttpClient,
              private router: Router){
  }

  giveCorrectHeadingToRequest(readyRequest: Request): HttpHeaders {
    return new HttpHeaders({
      contentType: 'application/json',
      accept: 'application/json',
      authorization: 'Bearer ' + readyRequest.adminToken
    });

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
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));

  }

  sendRequestQuestion(request: Request) {
    this.setConnectionSpecifics("question", request.specific);
    return this.http.request<Question[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));
  }

  sendRequestQuestionItem(request: Request) {
    this.setConnectionSpecifics("question", request.specific);
    return this.http.request<Question>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));
  }

  sendRequestAnswer(request: Request) {
    this.setConnectionSpecifics("answer", request.specific);
    return this.http.request<Answer[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));
  }

  sendRequestAnswerItem(request: Request) {
    this.setConnectionSpecifics("answer", request.specific);
    return this.http.request<Answer>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));
  }

  sendRequestGivenAnswer(request: Request) {
    this.setConnectionSpecifics("givenanswer", request.specific);
    return this.http.request<GivenAnswer[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));

  }

  sendRequestRoute(request: Request) {
    this.setConnectionSpecifics("route", request.specific);
    return this.http.request<Route[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));

  }

  sendRequestResult(request: Request) {
    this.setConnectionSpecifics("result", request.specific);
    return this.http.request<Result[]>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));

  }

  sendRequestAdvice(request: Request) {
    this.setConnectionSpecifics("advice", request.specific);
    return this.http.request<Advice[]>(request.duty, this.url, {
      headers: this.giveCorrectHeadingToRequest(request),
      body: request.givenVariables,
    }).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));
  }

  sendRequestAdviceItem(request: Request) {
    this.setConnectionSpecifics("advice", request.specific);
    return this.http.request<Advice>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    ).pipe(catchError(
      (error: HttpErrorResponse): Observable<any> => {
        this.errorHandling(error);
        return;
      }));

  }

  private errorHandling(errorRes) {
        switch (errorRes.status) {
          case 403:
            this.router.navigate(['/admin/login'])
            alert("Sessie is voorbij")
            break;
          case 401:
            this.router.navigate(['/geenAuthenticatie'])
        }
        return;
  }
}
