import {Subject, Subscription} from "rxjs";
import {Grant} from "../model/grant.model";
import {Injectable, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {RouteService} from "../route/route.service";
import {Category} from "../model/category.model";
import {Router} from "@angular/router";

class GivenAnswer {
}

@Injectable({providedIn: 'root'})
export class CalculateResultService implements OnInit, OnDestroy, OnChanges {

  private MIN_AMOUNT_OF_CATEGORIES: number = 5;
  possibleGrants: Grant[];
  resultHasBeenCalculated: Subject<Grant> = new Subject<Grant>();
  givenAnswerSubscription: Subscription;
  currentRoute: Route;

  constructor(private routeService: RouteService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.possibleGrants = this.routeService.getPossibleRoutes();
    // this.givenAnswerSubscription = this.routeService.updatedRoute.subscribe;
  }


  onAddedGivenAnswer():Grant{
    let amountOfSpecificCategory: {category: string, amount: number}[] = []
    for (let answer of this.currentRoute.givenAnswers) {
      for (let grant of this.possibleGrants) {
        for (let grCategory of grant.categories) {
          for (let anCategory of answer) {
            if(grCategory === anCategory ){
              if(amountOfSpecificCategory.indexOf(grCategory.name) !== -1){
                const i = amountOfSpecificCategory.indexOf(grCategory.name);
                amountOfSpecificCategory[i].amount ++;
                if(amountOfSpecificCategory[i].amount == this.MIN_AMOUNT_OF_CATEGORIES){
                  return grant;
                }
              }
              else{
                amountOfSpecificCategory.push({category: grCategory.name, amount:1})
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

  ngOnChanges(changes: GivenAnswer): void {
    const result:Grant= this.onAddedGivenAnswer();
    if(result != null || result !=undefined){
      this.openResultPage(result)
    }
  }

  private openResultPage(result: Grant) {
    this.router.navigate(['result/'+ Grant.name]);
  }
}
