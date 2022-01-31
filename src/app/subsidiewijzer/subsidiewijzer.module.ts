import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExtraInfoComponent} from "./question-screen/answer/extra-info/extra-info.component";
import {QuestionComponent} from "./question-screen/question/question.component";
import {AnswerComponent} from "./question-screen/answer/answer.component";
import {MoreInfoComponent} from "./question-screen/more-info/more-info.component";
import {GrantComponent} from "../admin/edit-grant/grant/grant.component";
import {AdviceComponent} from "../admin/edit-advice/advice/advice.component";
import {QuestionItemComponent} from "../admin/edit-question/question-item/question-item.component";
import {FormsModule} from "@angular/forms";
import {SubsidiewijzerRoutingModule} from "./subsidiewijzer-routing.module";

@NgModule({
  declarations: [
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    MoreInfoComponent,
    GrantComponent,
    AdviceComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubsidiewijzerRoutingModule,
  ],
})
export class SubsidiewijzerModule {
}
