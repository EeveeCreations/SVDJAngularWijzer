import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CalculateQuestionService} from "../service/calculate-question.service";
import {Question} from "../models/question.model";

@Injectable({providedIn: 'root'})
export class QuestionScreenResolver implements Resolve<Question[]> {

  constructor(private service: CalculateQuestionService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.service.getQuestionsFromApi();
  }
}
