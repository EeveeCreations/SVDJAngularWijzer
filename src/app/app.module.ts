import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionComponent} from './subsidiewijzer/question-screen/question/question.component';
import {AnswerComponent} from './subsidiewijzer/question-screen/answer/answer.component';
import {ExtraInfoComponent} from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ResultScreenComponent} from "./subsidiewijzer/result-screen/result-screen.component";
import {RequestService} from "./shared/request/request.service";
import { MoreInfoComponent } from './subsidiewijzer/question-screen/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    AppComponent,
    routingComponents,
    MoreInfoComponent,
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
