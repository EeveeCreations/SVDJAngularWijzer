import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ReformRequestComponent } from './request/reform-request/reform-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ReformRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
