import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ReformRequestComponent } from './request/reform-request/reform-request.component';
import { ConfigComponent } from './config/config.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ReformRequestComponent,
    ConfigComponent,
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
