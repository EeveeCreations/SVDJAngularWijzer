import {Component} from '@angular/core';
import {StartRequestService} from "./shared/request/start-request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;

  constructor(private reqService: StartRequestService) {
  }

  onEstablishConnection() {
    this.reqService.establishConnection();
  }
}
