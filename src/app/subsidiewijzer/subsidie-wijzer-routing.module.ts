import {BeginComponent} from "./begin/begin.component";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {QuestionScreenResolver} from "../shared/resolvers/question-screen.resolver";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainScreenComponent} from "./main-screen/main-screen.component";

const routes = [
  {
    path: '', component: MainScreenComponent, children: [
      {path: '', component: BeginComponent, pathMatcher: 'full'},
      {path: 'vragenlijst', component: QuestionScreenComponent,
        resolve: {questionList: QuestionScreenResolver},
        // { path: 'result', component: ResultScreenComponent}
      },
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SubsidieWijzerRoutingModule {}
