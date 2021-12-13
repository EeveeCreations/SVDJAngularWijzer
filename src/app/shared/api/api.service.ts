import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/question.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }



  getQuestionFromApi() {
  return this.http.get("https://localhost:8443/question/all")
  }
}
