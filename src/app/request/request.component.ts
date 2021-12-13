import { Component, OnInit } from '@angular/core';
import {Question} from "./models/Question.model";
import {Answer} from "./models/Answer.model";
import {isEmpty} from "rxjs";
import {Request} from "./Request.model";
import {Grant} from "./models/Grant.model";
import {ReformRequestComponent} from "./reform-request/reform-request.component";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {DeconstructionService} from "../services/DeconstructionService";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  reformRequest: ReformRequestComponent = new ReformRequestComponent();
  deconstructionService: DeconstructionService = new DeconstructionService();
  constructor() { }

  ngOnInit(): void {
  }
  public establishConnection(): boolean{
    let request: Request = new Request(1,"GET","all",null,false)
    let listOfAnswers: Grant[] = this.getAnswerNewRequest(request,"Grant")

    return (listOfAnswers.length !=0)
  }

  private getAnswerNewRequest(request: Request, className: string) {
    let receivedRequest: any[] = this.reformRequest.reformToSendRequest(request,className)
    if(request.duty === "GET") {
      let  requestAnswer: any[] = this.decryptReceivedRequest(receivedRequest, className);
      return requestAnswer;
    }
    return [];
  }

  private decryptReceivedRequest(receivedRequest: JsonArray, className: any) {
    return this.deconstructionService.deConstructJSON(receivedRequest,className);
  }

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
