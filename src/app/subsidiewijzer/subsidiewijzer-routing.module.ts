import {BeginComponent} from "./begin/begin.component";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {QuestionScreenResolver} from "../shared/resolvers/question-screen.resolver";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

const routes = [
  {
    path: '', component: BeginComponent, children: [
      {path: '', component: BeginComponent, pathMatcher: 'full'},
      {path: 'vragen', component: QuestionScreenComponent, resolve: {questionList: QuestionScreenResolver},
        // { path: 'result', component: ResultScreenComponent}
      },
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SubsidiewijzerRoutingModule{}
