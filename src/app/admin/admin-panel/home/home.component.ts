import { Component, OnInit } from '@angular/core';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greeting: string;

  grantCount: number;
  adviceCount: number;
  questionCount: number;


  constructor(private startRequestService: StartRequestService) { }

  ngOnInit(): void {
    this.greet();
    this.getAllCounts();
  }

  getAllCounts() {
    this.startRequestService.makeRequestOfGrant("GET", "all", null).subscribe(response => {
      this.grantCount = response.length;
    })

    this.startRequestService.makeRequestOfAdvice("GET", "all", null).subscribe(response => {
      this.adviceCount = response.length;
    })

    this.startRequestService.makeRequestOfQuestion("GET", "all", null).subscribe(response => {
      this.questionCount = response.length;
    })
  }

  greet() {
    const hour = new Date().getHours();
    const welcomeTypes = ["Goede Morgen", "Goede Middag", "Goede Avond"];

    if (hour < 12) this.greeting = welcomeTypes[0];
    else if (hour < 18) this.greeting = welcomeTypes[1];
    else this.greeting = welcomeTypes[2];
  }
}
