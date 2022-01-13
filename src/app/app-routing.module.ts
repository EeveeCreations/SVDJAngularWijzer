import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import {QuestionScreenComponent} from "./subsidiewijzer/question-screen/question-screen.component";
import {ResultScreenComponent} from "./subsidiewijzer/result-screen/result-screen.component";

const routes: Routes = [
  { path: 'subsidiewijzer', component: BeginComponent},
  { path: 'subsidiewijzer/vragen', component: QuestionScreenComponent},
  { path: 'subsidiewijzer/result/:id', component: ResultScreenComponent},
  { path: '**', redirectTo: 'subsidiewijzer'}

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
export class AppRoutingModule {}
export const routingComponents = [BeginComponent, QuestionScreenComponent, ResultScreenComponent]
