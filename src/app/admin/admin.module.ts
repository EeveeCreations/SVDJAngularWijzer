import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {EditAdviceComponent} from "./edit-advice/edit-advice.component";
import {EditGrantComponent} from "./edit-grant/edit-grant.component";
import {EditQuestionComponent} from "./edit-question/edit-question.component";
import {AdminNavComponent} from "./admin-nav/admin-nav.component";
import {ResetPasswordComponent} from "./forgot-password/reset-password/reset-password.component";
import {SendTokenComponent} from "./forgot-password/send-token/send-token.component";
import {VerifyTokenComponent} from "./forgot-password/verify-token/verify-token.component";
import {GrantComponent} from "./edit-grant/grant/grant.component";
import {AdviceComponent} from "./edit-advice/advice/advice.component";
import {QuestionItemComponent} from "./edit-question/question-item/question-item.component";

@NgModule({
  declarations: [
    AdminPanelComponent,
    LoginComponent,
    EditAdviceComponent,
    EditGrantComponent,
    EditQuestionComponent,
    AdminNavComponent,
    ResetPasswordComponent,
    SendTokenComponent,
    VerifyTokenComponent,
    GrantComponent,
    AdviceComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
})
export class  AdminModule{}
