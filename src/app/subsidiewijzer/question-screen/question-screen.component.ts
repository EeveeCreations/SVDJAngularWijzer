import {Component, OnInit} from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { StartRequestService } from 'src/app/shared/request/start-request.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  currentQuestion: Question;
  questions: Question[];

  currentIndex: number;
  previousQuestions: Question[];

  constructor(private startRequestService: StartRequestService) {
  }

  ngOnInit(): void {
    this.startRequestService.makeRequestOfQuestion("get", "all", null).subscribe(response => {
      this.questions = response;
      this.currentQuestion = response[0];
    })

  }

  onNext() {
    
  }

  onPrevious() {
    
  }

}
