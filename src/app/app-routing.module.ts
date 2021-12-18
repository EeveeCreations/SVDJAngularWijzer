import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import {QuestionScreenComponent} from "./subsidiewijzer/question-screen/question-screen.component";
import {QuestionScreenResolver} from "./subsidiewijzer/question-screen/question-screen.resolver";

const routes: Routes = [
  { path: 'subsidiewijzer', component: BeginComponent},
  { path: 'subsidiewijzer/vragen', component: QuestionScreenComponent, resolve: { questionList: QuestionScreenResolver}}
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
export const routingComponents = [BeginComponent, QuestionScreenComponent]
