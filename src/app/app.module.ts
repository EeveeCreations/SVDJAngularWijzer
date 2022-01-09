import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionComponent} from './subsidiewijzer/question-screen/question/question.component';
import {AnswerComponent} from './subsidiewijzer/question-screen/answer/answer.component';
import {ExtraInfoComponent} from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {RequestService} from "./shared/request/request.service";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    AppComponent,
    routingComponents
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
