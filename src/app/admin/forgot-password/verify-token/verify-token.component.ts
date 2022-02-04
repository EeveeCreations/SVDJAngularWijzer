import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['../forgot-password.component.css']
})
export class VerifyTokenComponent implements OnInit {
  verifyTokenForm: FormGroup;
  error: null;
  @Input()email: string;

  constructor(  private router: Router,
                private activeRoute:ActivatedRoute,
                private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.email = this.activeRoute.params['email'];
  }


  private initForm() {
    this.verifyTokenForm = new FormGroup({
      'verifyToken': new FormControl(null,
        [Validators.required]),
    });
  }

  onVerify() {
    if (!this.verifyTokenForm.valid) {
      return;
    }
    this.error = null;
    this.authService.checkTokenOfPasswordReset(this.email,this.verifyTokenForm.get('verifyToken').value).subscribe((answer) => {
      if (answer != null) {
        this.router.navigate(['./reset-wachtwoord'],{relativeTo: this.activeRoute});
      }
    });
  }
}
