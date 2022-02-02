import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { WrongAuthComponent } from '../admin/wrong-auth/wrong-auth.component';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  // providers:[LoggingService]

})
export class SharedModule{

}
