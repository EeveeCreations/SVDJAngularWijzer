import {BeginComponent} from "./begin/begin.component";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {QuestionScreenResolver} from "../shared/resolvers/question-screen.resolver";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainScreenComponent} from "./main-screen/main-screen.component";
import {AdviceComponent} from "../admin/admin-panel/edit-advice/advice/advice.component";

const routes = [
  {
    path: '', component: MainScreenComponent, children: [
      {path: '', component: BeginComponent, pathMatcher: 'full'},
      {path: 'vragenlijst', component: QuestionScreenComponent,
        resolve: {questionList: QuestionScreenResolver}},
        {path: 'advies/{:id}', component: AdviceComponent}
      ,
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SubsidieWijzerRoutingModule {}
