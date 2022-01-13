import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getFromApi(endpoint: string): Observable<any> | Promise<any> | any{
    return this.http.get("https://localhost:8443/" + endpoint);
  }

  getQuestions(endpoint: string) {
    return this.http.get<Question[]>("https://localhost:8443/" + endpoint);
  }
}

