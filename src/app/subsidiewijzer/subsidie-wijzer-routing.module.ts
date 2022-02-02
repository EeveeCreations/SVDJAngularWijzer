import {BeginComponent} from "./begin/begin.component";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {QuestionScreenResolver} from "../shared/resolvers/question-screen.resolver";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainScreenComponent} from "./main-screen/main-screen.component";
import { AdviceComponentUser } from "./advice/advice.component";
import { CommonModule } from "@angular/common";

const routes = [
  {
    path: '', component: MainScreenComponent, children: [
      {path: '', component: BeginComponent, pathMatcher: 'full'},
      {path: 'advies/:id', component: AdviceComponentUser, pathMatcher: 'full'},
      {path: 'vragenlijst', component: QuestionScreenComponent,
        resolve: {questionList: QuestionScreenResolver}
      },
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SubsidieWijzerRoutingModule {}
