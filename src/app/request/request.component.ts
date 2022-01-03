import {Component, OnInit} from '@angular/core';
import {Request} from "./Request.model";
import {Grant} from "./models/Grant.model";
import {ReformRequestComponent} from "../shared/request/reform-request.service";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {DeconstructionService} from "../services/DeconstructionService";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public establishConnection(): boolean{
    let request: Request = new Request(1,"GET","all",null,false)
    let listOfAnswers: Grant[] = this.getAnswerNewRequest(request,"Grant")

    return (listOfAnswers.length !=0)
  }

  private getAnswerNewRequest(request: Request, className: string):any[] {
    // if(request.duty === "GET") {
    //   let  requestAnswer: any[] = this.decryptReceivedRequest(receivedRequest, className);
    //   return requestAnswer;
    // }
    return this.reformRequest.reformToSendRequest(request, className);
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
