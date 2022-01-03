import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {Component, OnInit} from '@angular/core';
import {Request} from "../../request/Request.model";
import {EncryptService} from "../../services/EncryptService";
import {DecryptService} from "../../services/Decrypt.service";
import {RequestDAO} from "./request.service";

@Component({
  selector: 'app-reform-request',
  templateUrl: '../../request/reform-request/reform-request.component.html',
  styleUrls: ['../../request/reform-request/reform-request.component.css']
})
export class ReformRequestComponent implements OnInit {

 constructor( private encryptService:EncryptService,
  private decryptService:DecryptService,
              private requestDAO: RequestDAO) {
 }

  ngOnInit(): void {
  }

  // /**
  //  * Turns the given String to a JsonObject
  //  *
  //  * @param request
  //  * @param oldRequest
  //  * @return
  //  */
  // public RevertToJsonElement(request: any[], oldRequest: Request): any[] {
  //   if ((oldRequest.duty === "PUT") || ((oldRequest.duty === "GET") && !(oldRequest.specific === "all"))){
  //     let item: JsonObject = JSON.parse(request[0]);
  //     let jsArray: JsonArray= [];
  //     jsArray.push(item);
  //     return jsArray;
  //   }
  //   return request;
  //
  // }


  reformToSendRequest(readyToEncryptRequest: Request, className: string) :any[] {
    //        encryptedJsonRequest:JsonObject = encryptTheRequest(readyToEncryptRequest);
    let encryptedJsonAnswer: any[] = this.requestDAO.sendRequest(readyToEncryptRequest, className);
    // return this.RevertToJsonElement(encryptedJsonAnswer, readyToEncryptRequest);
  return this.requestDAO.sendRequest(readyToEncryptRequest, className);
  }


  /*Encrypt and Decrypt the Request*/
  private encryptTheRequest(request: Request): JsonObject {
    return this.encryptService.encryptData(request);
  }

  private deCryptTheRequest(requestJson: JsonArray): JsonArray {
    return this.decryptService.deCryptData(requestJson);
  }
}
