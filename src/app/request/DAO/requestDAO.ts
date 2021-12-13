import {SafeUrl} from "@angular/platform-browser";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Request} from "../Request.model";
// import {errorContext} from "rxjs/dist/types/internal/util/errorContext";

export class RequestDAO {


  private static requestDao;
  private con: SafeUrl;
  private url: string;

  static getInstance(): RequestDAO {
    if (this.requestDao == null) {
      // this.requestDao = new RequestDAO(new HttpCli));
    }
    return this.requestDao;
  }

  constructor(private http: HttpClient) {
  }

  /**
   * Sends request in different Methods
   * @return requestAnswer
   * @throws IOException
   * @author Eefje | AntiEevee
   */
  sendRequest(readyRequest: Request, className: string): any[] {
    let newRequest: any[] = null;
    this.setConnectionSpecifics(className, readyRequest.specific);
    newRequest = this.readRequest(readyRequest, className);

    return newRequest;
  }

  private readRequest(readyRequest: Request, className: string): any[] {
    let content: any[];
    if (readyRequest.givenVariables !== null) {
      content = this.addOnToRequest(readyRequest, className)
    }
    this.http.request(readyRequest.duty, this.url,{
      headers: this.giveHeadingToRequest(readyRequest)})
      .subscribe(((response: any[]) => {
        content = response;
      }));
    return content;
  }


  private giveHeadingToRequest(readyRequest: Request): HttpHeaders {
    let headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("userNumber", readyRequest.userNr.toString());
    return headerOfRequest

  }

  /**
   * When a request needs  parameters that isnt the header  fo methods other than GET  this function will give those parameters.
   * @param readyRequest
   * @param className
   * @param headerOfRequest
   * @private
   */
  private addOnToRequest(readyRequest: Request, className: string): any[] {
    let content: any[];
    let parameters: HttpParams = this.formRequest(readyRequest, className)
    this.http.request(readyRequest.duty, this.url, {
      headers: this.giveHeadingToRequest(readyRequest),
      params: parameters
    })
      .subscribe((response: any[]) => {
        content = response;
      }, (error) => {
        // throw errorContext(
          alert(JSON.stringify(error));
      });

    return content;
  }

  /**
   * Makes parameters for the REquest to send when needed
   */
  private formRequest(jsonRequest: Request, className: string): HttpParams {
    let parameters: HttpParams = new HttpParams();
    for (let aModel of jsonRequest.givenVariables) {
      parameters.append(className.toLowerCase(), aModel);
    }
    return parameters;

  }

  private setConnectionSpecifics(className: string, specific: string): void {
    this.url = ("http://localhost:8080/" + className.toLowerCase());
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }
}
