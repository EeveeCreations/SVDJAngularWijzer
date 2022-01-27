import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advice } from 'src/app/shared/models/advice.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {
  advice: Advice;

  constructor(private activatedRoute: ActivatedRoute, private startRequestService: StartRequestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id: number = +params['id'];
      this.startRequestService.makeRequestOfAdviceItem("get", id.toString(), null).subscribe(response => {
        this.advice = response;
      })
    })
  }

}
