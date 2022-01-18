import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionComponent} from './subsidiewijzer/question-screen/question/question.component';
import {AnswerComponent} from './subsidiewijzer/question-screen/answer/answer.component';
import {ExtraInfoComponent} from './subsidiewijzer/question-screen/answer/extra-info/extra-info.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {RequestService} from "./shared/request/request.service";
import { MoreInfoComponent } from './subsidiewijzer/question-screen/more-info/more-info.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ResetPasswordComponent } from './admin/forgot-password/reset-password/reset-password.component';
import { SendTokenComponent } from './admin/forgot-password/send-token/send-token.component';
import { VerifyTokenComponent } from './admin/forgot-password/verify-token/verify-token.component';
import { GrantComponent } from './admin/edit-grant/grant/grant.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    ExtraInfoComponent,
    AppComponent,
    routingComponents,
    MoreInfoComponent,
    AdminNavComponent,
    ResetPasswordComponent,
    SendTokenComponent,
    VerifyTokenComponent,
    GrantComponent
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
