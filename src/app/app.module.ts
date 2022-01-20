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
import { AdviceComponent } from './admin/edit-advice/advice/advice.component';
import { QuestionItemComponent } from './admin/edit-question/question-item/question-item.component';
import { FormsModule } from '@angular/forms';

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
    GrantComponent,
    AdviceComponent,
    QuestionItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
