import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { QuestionScreenComponent } from "./subsidiewijzer/question-screen/question-screen.component";
import { QuestionScreenResolver } from "./subsidiewijzer/question-screen/question-screen.resolver";
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { LoginComponent } from './admin/login/login.component';
import { EditAdviceComponent } from './admin/edit-advice/edit-advice.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { EditGrantComponent } from './admin/edit-grant/edit-grant.component';
import { EditQuestionComponent } from './admin/edit-question/edit-question.component';

const routes: Routes = [
  { path: 'subsidiewijzer', component: BeginComponent},
  { path: 'subsidiewijzer/vragen', component: QuestionScreenComponent, resolve: { questionList: QuestionScreenResolver}},
  { path: 'admin', component: AdminPanelComponent},
  { path: 'login', component: LoginComponent},
  { path: 'wachtwoord-vergeten', component: ForgotPasswordComponent},
  { path: 'admin/advies', component: EditAdviceComponent},
  { path: 'admin/subsidie', component: EditGrantComponent},
  { path: 'admin/vraag', component: EditQuestionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [BeginComponent, QuestionScreenComponent, AdminPanelComponent, LoginComponent, ForgotPasswordComponent, EditAdviceComponent, EditGrantComponent, EditQuestionComponent]
