import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
import {Config} from "./config.model";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  private configService: ConfigService = new ConfigService();
  private config: Config

  constructor() {
  }

  ngOnInit(): void {
  }

  // showConfig() {
  //   this.configService.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //       heroesUrl: data.heroesUrl,
  //       textfile: data.textfile,
  //       date: data.date,
  //     });
  //
  // }
}

