import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {EditAdviceComponent} from "./admin-panel/edit-advice/edit-advice.component";
import {EditGrantComponent} from "./admin-panel/edit-grant/edit-grant.component";
import {EditQuestionComponent} from "./admin-panel/edit-question/edit-question.component";
import {AdminNavComponent} from "./admin-panel/admin-nav/admin-nav.component";
import {ResetPasswordComponent} from "./forgot-password/reset-password/reset-password.component";
import {SendTokenComponent} from "./forgot-password/send-token/send-token.component";
import {VerifyTokenComponent} from "./forgot-password/verify-token/verify-token.component";
import {QuestionItemComponent} from "./admin-panel/edit-question/question-item/question-item.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {AdviceComponent} from "./admin-panel/edit-advice/advice/advice.component";
import {GrantComponent} from "./admin-panel/edit-grant/grant/grant.component";

@NgModule({
  declarations: [
    AdminPanelComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SendTokenComponent,
    VerifyTokenComponent,
    QuestionItemComponent,
    AdviceComponent,
    GrantComponent,
    EditAdviceComponent,
    EditGrantComponent,
    EditQuestionComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  exports:[
    AdminPanelComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SendTokenComponent,
    VerifyTokenComponent,
    QuestionItemComponent,
    AdviceComponent,
    GrantComponent,
    EditAdviceComponent,
    EditGrantComponent,
    EditQuestionComponent,
    AdminNavComponent
  ]
})
export class  AdminModule{}
