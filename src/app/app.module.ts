import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
