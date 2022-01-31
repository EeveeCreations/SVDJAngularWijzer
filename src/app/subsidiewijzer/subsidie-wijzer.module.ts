import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExtraInfoComponent} from "./question-screen/answer/extra-info/extra-info.component";
import {QuestionComponent} from "./question-screen/question/question.component";
import {AnswerComponent} from "./question-screen/answer/answer.component";
import {MoreInfoComponent} from "./question-screen/more-info/more-info.component";
import {FormsModule} from "@angular/forms";
import {SubsidieWijzerRoutingModule} from "./subsidie-wijzer-routing.module";
import {QuestionScreenComponent} from "./question-screen/question-screen.component";
import {BeginComponent} from "./begin/begin.component";
import {MainScreenComponent} from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    BeginComponent,
    ExtraInfoComponent,
    MoreInfoComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionScreenComponent,
    MainScreenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubsidieWijzerRoutingModule,
  ],
  exports: [
    BeginComponent,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    MoreInfoComponent,
    QuestionScreenComponent,
    MainScreenComponent,
  ]
})
export class SubsidieWijzerModule {
}
