import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { QuestionScreenComponent } from "./subsidiewijzer/question-screen/question-screen.component";
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { LoginComponent } from './admin/login/login.component';
import { EditAdviceComponent } from './admin/edit-advice/edit-advice.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { EditGrantComponent } from './admin/edit-grant/edit-grant.component';
import { EditQuestionComponent } from './admin/edit-question/edit-question.component';

const routes: Routes = [
  {path: '', redirectTo: '/subsidiewijzer', pathMatch: 'full'},
  {path: 'subsidiewijzer', loadChildren: () =>
      import('./subsidiewijzer/subsidiewijzer.module')
        .then(m => m.SubsidiewijzerModule)},
  {path: 'admin', loadChildren: () =>
      import('./admin/admin.module')
        .then(m => m.AdminModule)},
  // {path:'not-found', component:ErrorPageComponent, data:{message: 'Page not found'}},
  {path: '**', redirectTo: '/subsidiewijzer'}
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
