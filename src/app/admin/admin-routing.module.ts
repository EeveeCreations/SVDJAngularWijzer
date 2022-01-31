import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {EditAdviceComponent} from "./edit-advice/edit-advice.component";
import {EditGrantComponent} from "./edit-grant/edit-grant.component";
import {EditQuestionComponent} from "./edit-question/edit-question.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes =[
{ path: 'admin', component: AdminPanelComponent ,children: [
  { path: 'advies', component: EditAdviceComponent},
  { path: 'subsidie', component: EditGrantComponent},
  { path: 'vraag', component: EditQuestionComponent}
  ]},
{ path: 'login', component: LoginComponent},
{ path: 'wachtwoord-vergeten', component: ForgotPasswordComponent},
];
@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
  })
export class AdminRoutingModule {
}
