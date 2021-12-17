import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionComponent} from './subsidiewijzer/question-screen/question/question.component';
import {AnswerComponent} from './subsidiewijzer/question-screen/answer/answer.component';
import {ExtraInfoComponent} from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';
import { RequestComponent } from './request/request.component';
import { ReformRequestComponent } from './request/reform-request/reform-request.component';
import { ConfigComponent } from './config/config.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    RequestComponent,
    ReformRequestComponent,
    ConfigComponent,
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
