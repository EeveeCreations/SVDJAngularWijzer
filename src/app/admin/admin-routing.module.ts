import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {EditAdviceComponent} from "./admin-panel/edit-advice/edit-advice.component";
import {EditGrantComponent} from "./admin-panel/edit-grant/edit-grant.component";
import {EditQuestionComponent} from "./admin-panel/edit-question/edit-question.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WrongAuthComponent} from "./wrong-auth/wrong-auth.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import { HomeComponent } from "./admin-panel/home/home.component";

const routes = [
  {
    path: '', component: AdminPanelComponent, children: [
      {path: '', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'},
      {path: 'advies', canActivate: [AuthGuard], component: EditAdviceComponent},
      {path: 'subsidie', canActivate: [AuthGuard], component: EditGrantComponent},
      {path: 'vraag', canActivate: [AuthGuard], component: EditQuestionComponent}
    ]
  },
  {path: 'geenAuthenticate', component: WrongAuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wachtwoord-vergeten', component: ForgotPasswordComponent},
];
@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  })
export class AdminRoutingModule {
}
