import {Subject, Subscription} from "rxjs";
import {Grant} from "../models/grant.model";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {UserRouteService} from "../route/user-route.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Route} from "../models/route.model";
import {Category} from "../models/category.model";
import {Answer} from "../models/answer.model";
import {GivenAnswer} from "../models/given-answer.model";
import {relativeFrom} from "@angular/compiler-cli";

@Injectable({providedIn: 'root'})
export class CalculateResultService implements OnInit, OnDestroy {

  private MIN_AMOUNT_OF_CATEGORIES: number = 5;
  possibleGrants: Grant[];
  resultOptionsChanged: Subject<Grant> = new Subject<Grant>();
  givenAnswerSubscription: Subscription;
  currentRoute: Route;

  constructor(private routeService: UserRouteService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.possibleGrants = this.routeService.getPossibleEndings();
    // this.givenAnswerSubscription = this.routeService.updatedRoute.subscribe;
  }

  private getNameOfOptions(amountOfSpecificCategory: { category: string; amount: number }[]): string[] {
    return amountOfSpecificCategory.map((options => {
      return options.category;
    }));
  }

  onAddedGivenAnswer():Grant {
    let amountOfSpecificCategory: { category: string, amount: number }[] = [];
    const givenAnswers: GivenAnswer[] = this.currentRoute.givenAnswers;
    let answer: Answer;

    for (const givenAnswer of givenAnswers) {
      answer = givenAnswer.answer;
      for (let grant of this.possibleGrants) {
        const grCategories: Category[] = grant.categories;
        for (let grCategory of grCategories) {
          for (let anCategory of answer.categories) {
            if (grCategory === anCategory) {
              if (this.getNameOfOptions(amountOfSpecificCategory).indexOf(anCategory.name) !== -1) {
                const i = this.getNameOfOptions(amountOfSpecificCategory).indexOf(anCategory.name);
                amountOfSpecificCategory[i].amount++;
                if (amountOfSpecificCategory[i].amount == this.MIN_AMOUNT_OF_CATEGORIES) {
                  return grant;
                }
              } else {
                amountOfSpecificCategory.push({category: grCategory.name, amount: 1})
              }
            }
          }
        }
      }
    }
    return;
  }


  ngOnDestroy(): void {
    this.givenAnswerSubscription.unsubscribe();
  }

 checkIfResultISCalculated(){
    const result:Grant= this.onAddedGivenAnswer();
    if(result != null || result !=undefined){
      this.openResultPage(result)
    }
  }

  private openResultPage(result: Grant) {
    this.router.navigate(['result/'+ result.GrantID], {relativeTo: this.activeRoute});
  }
}
