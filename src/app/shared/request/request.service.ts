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

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string;

  constructor(private http: HttpClient) {
  }

  // /**
  //  * Sends request in different Methods
  //  * @return requestAnswer
  //  * @throws IOException
  //  * @author Eefje | AntiEevee
  //  */
  // sendRequest(readyRequest: Request, className: string): any[] {
  //   let newRequest: any[] = null;
  //   this.setConnectionSpecifics(className, readyRequest.specific);
  //   newRequest = this.selectCorrectRequest( className,readyRequest);
  //   return newRequest;
  // }
  // /**
  //  * When a request needs  parameters that isn't the header  fo methods other than GET  this function will give those parameters.
  //  * @param readyRequest
  //  * @param className
  //  * @  //  */
  // addOnToRequest(readyRequest: Request, className: string): any[] {
  //   let content: any[];
  //   let parameters: HttpParams = this.formRequest(readyRequest, className)
  //   this.http.request(readyRequest.duty, this.url, readyRequest.givenVariables)
  //     .pipe()
  //     .subscribe((response) => {
  //       content = response;
  //     }, (error) => {
  //       // throw errorContext(
  //       alert(JSON.stringify(error));
  //     });
  //
  //   return content;
  // }
  // readRequest(readyRequest: Request, className: string): any[] {
  //   let content: any[];
  //   if (readyRequest.givenVariables !== null) {
  //     content = this.addOnToRequest(readyRequest, className)
  //   }
  //   else {
  //     this.http.request(readyRequest.duty, this.url, {
  //       headers: this.giveHeadingToRequest(readyRequest)
  //     })
  //       .pipe(map( response =>{
  //         const responseArray =[];
  //         //Change to needed Data.
  //         return responseArray;
  //       }))
  //       .subscribe(((response: any[]) => {
  //         content = response;
  //       }));
  //   }
  //   return content;
  // }
  // /**
  //  * Makes parameters for the Request to send when needed
  //  */
  // formRequest(jsonRequest: Request, className: string): HttpParams {
  //   let parameters: HttpParams = new HttpParams();
  //   for (let aModel of jsonRequest.givenVariables) {
  //     parameters.append(className.toLowerCase(), aModel.toString());
  //   }
  //   return parameters;
  //
  //
// //  Send Requests specifically for classes______________________________________________________________________________
//   selectCorrectRequest(className: string, request: Request): any[] {
//     let newObject: Object = null;
//     switch (className.toLowerCase()) {
//       case "grant" :
//         newObject = this.sendRequestGrant(request);
//         break;
//       case "question" :
//         newObject = this.sendRequestQuestion(request);
//         break;
//       case "answer" :
//         newObject = this.sendRequestAnswer(request);
//         break;
//       case "givenanswer" :
//         newObject = this.sendRequestGivenAnswer(request);
//         break;
//       case "route" :
//         newObject = this.sendRequestRoute(request);
//         break;
//       case "result" :
//         newObject = this.sendRequestResult(request);
//         break;
//       case "category" :
//         newObject = this.sendRequestCategory(request);
//         break;
//     }
//     return newObject;
//   }

  giveCorrectHeadingToRequest(readyRequest: Request): HttpHeaders {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("userNumber", readyRequest.userNr.toString());
    return headerOfRequest

  }

  setConnectionSpecifics(className: string, specific: string): void {
    this.url = ("http://localhost:8080/" + className.toLowerCase());
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }

  sendRequestGrant(request: Request) {
    this.setConnectionSpecifics("grant", request.specific);
    return this.http.request<Grant>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestQuestion(request: Request) {
    this.setConnectionSpecifics("question", request.specific);
    return this.http.request<Question>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestAnswer(request: Request) {
    this.setConnectionSpecifics("answer", request.specific);
    return this.http.request<Answer>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }

  sendRequestGivenAnswer(request: Request) {
    this.setConnectionSpecifics("givenanswer", request.specific);
    return this.http.request<GivenAnswer>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestRoute(request: Request) {
    this.setConnectionSpecifics("route", request.specific);
    return this.http.request<Route>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestResult(request: Request) {
    this.setConnectionSpecifics("result", request.specific);
    return this.http.request<Result>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )

  }

  sendRequestCategory(request: Request) {
    this.setConnectionSpecifics("category", request.specific);
    return this.http.request<Category>(request.duty, this.url, {
        headers: this.giveCorrectHeadingToRequest(request),
        body: request.givenVariables,
      }
    )
  }
}
