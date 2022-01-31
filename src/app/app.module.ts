import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AdminModule} from "./admin/admin.module";
import {SubsidiewijzerModule} from "./subsidiewijzer/subsidiewijzer.module";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    SubsidiewijzerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
