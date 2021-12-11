import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ResultDisclaimerComponent} from "./result/result-disclaimer/result-disclaimer.component";
import { ResultHeaderComponent} from "./result/result-header/result-header.component";
import { ResultScreenComponent} from "./result/result-screen/result-screen.component";
import { ResultListComponent} from "./result/result-screen/result-list/result-list.component";
import { ResultListItemComponent} from "./result/result-screen/result-list/result-list-item/result-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ResultDisclaimerComponent,
    ResultHeaderComponent,
    ResultScreenComponent,
    ResultListComponent,
    ResultListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
