import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CalculateQuestionServiceService} from "../../shared/service/calculate-question-service.service";
import {Observable} from "rxjs";
import {QuestionScreenComponent} from "./question-screen.component";

@Injectable({providedIn: 'root'})
export class QuestionScreenResolver implements Resolve<QuestionScreenComponent> {
  constructor(private service: CalculateQuestionServiceService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getQuestionsFromApi();
  }
}
