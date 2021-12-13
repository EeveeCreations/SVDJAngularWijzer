import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {Component, OnInit} from '@angular/core';
import {Request} from "../Request.model";
import {EncryptService} from "../../Services/EncryptService";
import {DecryptService} from "../../Services/Decrypt.service";
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

  /**
   * Turns the given String to a JsonObject
   *
   * @param request
   * @param oldRequest
   * @return
   */
  public RevertToJsonElement(request: string, oldRequest: Request): JsonArray {
    if ((oldRequest.duty === "PUT") || ((oldRequest.duty === "GET") && !(oldRequest.specific === "all"))){
      let item: JsonObject = JSON.parse(request);
      let jsArray: JsonArray= [];
      jsArray.push(item);
      return jsArray;
    }
    return JSON.parse(request);

  }


  reformToSendRequest(readyToEncryptRequest: Request, className: string) {
    //        encryptedJsonRequest:JsonObject = encryptTheRequest(readyToEncryptRequest);
    let encryptedJsonAnswer: string =RequestDAO.getInstance().sendRequest(readyToEncryptRequest, className, readyToEncryptRequest.duty, readyToEncryptRequest.specific);
    return this.RevertToJsonElement(encryptedJsonAnswer, readyToEncryptRequest);
  }


  /*Encrypt and Decrypt the Request*/
  private encryptTheRequest(request: Request): JsonObject {
    return this.encryptService.encryptData(request);
  }

  private deCryptTheRequest(requestJson: JsonArray): JsonArray {
    return this.decryptService.deCryptData(requestJson);
  }
}
