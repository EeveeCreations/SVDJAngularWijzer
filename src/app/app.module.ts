import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionScreenComponent } from './subsidiewijzer/question-screen/question-screen.component';
import { QuestionComponent } from './subsidiewijzer/question-screen/question/question.component';
import { AnswerComponent } from './subsidiewijzer/question-screen/answer/answer.component';
import { ExtraInfoComponent } from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    QuestionScreenComponent,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
