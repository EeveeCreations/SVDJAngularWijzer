import {BeginComponent} from "../begin/begin.component";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {QuestionScreenResolver} from "./question-screen/question-screen.resolver";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

const routes = [
  {path: 'subsidiewijzer', component: BeginComponent, children: [
      {
        path: 'vragen', component: QuestionScreenComponent, resolve: {questionList: QuestionScreenResolver},
        // { path: 'result', component: ResultScreenComponent}
      },
    ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SubsidiewijzerRoutingModule{}
