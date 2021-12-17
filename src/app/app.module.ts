import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './subsidiewijzer/question-screen/question/question.component';
import { AnswerComponent } from './subsidiewijzer/question-screen/answer/answer.component';
import { ExtraInfoComponent } from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
