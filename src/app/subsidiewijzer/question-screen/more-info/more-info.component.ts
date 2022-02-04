import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  @Input() question: Question;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  openInfo() {
    document.getElementById("side-extra-info").style.right = "0";
  }
  
  closeInfo() {
    document.getElementById("side-extra-info").style.right = "-800px";
  }

  getUrl(post) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.question.extraInfoVideoURL);
  }
}
