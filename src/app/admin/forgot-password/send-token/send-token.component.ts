import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-send-token',
  templateUrl: './send-token.component.html',
  styleUrls: ['../forgot-password.component.css']
})
export class SendTokenComponent implements OnInit {
  emailForm: FormGroup;
  error: null;

  constructor(
    private router: Router,
    private activeRoute:ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.initForm()
  }


  private initForm() {
    this.emailForm = new FormGroup({
      'email': new FormControl(null,
        [Validators.required]),
    });
  }

  onSendToken() {
    if (!this.emailForm.valid) {
      return;
    }
    this.error = null;
    this.authService.sendEmailOfPasswordReset(this.emailForm.get('email').value).subscribe((answer) => {
      if (answer != null) {
        this.router.navigate(['./tokenSend'],{relativeTo: this.activeRoute});
      }
      },(error) =>{
      this.error = error
      });
  }
}
