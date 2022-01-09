import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {QuestionComponent} from './subsidiewijzer/question-screen/question/question.component';
import {AnswerComponent} from './subsidiewijzer/question-screen/answer/answer.component';
import {ExtraInfoComponent} from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ResultScreenComponent} from "./subsidiewijzer/result-screen/result-screen.component";
import {RequestService} from "./shared/request/request.service";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    AppComponent,
    ExtraInfoComponent,
    ResultScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
