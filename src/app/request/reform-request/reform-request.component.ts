import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {Component, OnInit} from '@angular/core';
import {Request} from "../Request.model";
import {EncryptService} from "../../services/EncryptService";
import {DecryptService} from "../../services/Decrypt.service";
import {RequestDAO} from "../DAO/requestDAO";

@Component({
  selector: 'app-reform-request',
  templateUrl: './reform-request.component.html',
  styleUrls: ['./reform-request.component.css']
})
export class ReformRequestComponent implements OnInit {

  private encryptService:EncryptService = new EncryptService();
  private decryptService:DecryptService = new DecryptService()

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
    let encryptedJsonAnswer: any[] = RequestDAO.getInstance().sendRequest(readyToEncryptRequest, className);
    // return this.RevertToJsonElement(encryptedJsonAnswer, readyToEncryptRequest);
  return RequestDAO.getInstance().sendRequest(readyToEncryptRequest, className);
  }


  /*Encrypt and Decrypt the Request*/
  private encryptTheRequest(request: Request): JsonObject {
    return this.encryptService.encryptData(request);
  }

  private deCryptTheRequest(requestJson: JsonArray): JsonArray {
    return this.decryptService.deCryptData(requestJson);
  }
}
