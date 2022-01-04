import {Component, Injectable, OnInit} from '@angular/core';
import {Request} from "./request.model";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {DeconstructionService} from "../../services/DeconstructionService";
import {RequestService} from "./request.service";

@Injectable({providedIn: 'root'})
export class StartRequestService {
  constructor( private requestService:RequestService) { }


  public establishConnection(){
    let request: Request = new Request(1,"GET","all",null,false)
    this.requestService.sendRequestGrant(request)
      .subscribe(response =>{
        console.log(response)
      });

  }

  //
  // private getAnswerNewRequest(request: Request, className: string):any[] {
  //   // if(request.duty === "GET") {
  //   //   let  requestAnswer: any[] = this.decryptReceivedRequest(receivedRequest, className);
  //   //   return requestAnswer;
  //   // }
  //   return this.reformRequest.reformToSendRequest(request, className);
  // }
  //
  // private decryptReceivedRequest(receivedRequest: JsonArray, className: any) {
  //   return this.deconstructionService.deConstructJSON(receivedRequest,className);
  // }
//
//    getAnswerNewRequest(request: any, question: string): Answer[] {
//     return  [];
//   }
//
//   makeRequestWithQuestion(variables :Question[], specific: string , duty: string) :Question[] {
//     function createNewRequest(variables: Question[], specific: string, duty: string) {
//       return {prototype: undefined};
//     }
//
//     request :Request = createNewRequest(variables, specific, duty);
//
//
//     answer :[] = getAnswerNewRequest(request, "Question");
//   if (answer.size() > 1) {
//   return answer;
// // }
// return null;
// }


}
