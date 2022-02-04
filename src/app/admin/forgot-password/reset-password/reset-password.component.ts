import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../forgot-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  idToken: string;
  email: string;
  private error: null;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.getParameters();
    this.initForm();
  }

  private initForm() {
    this.newPasswordForm = new FormGroup({
      'newPassword': new FormControl(null,
        [Validators.required, Validators.minLength(8)]),
      'repeatPassword': new FormControl(null,
        [Validators.required, Validators.min(8), Validators.bind('newPassword')]),
    });
  }

  onResetPassword() {
    if (!this.newPasswordForm.valid ||
      (this.newPasswordForm.get('newPassword').value.equals(this.newPasswordForm.get('repeatPassword').value))) {
      return;
    }
    this.error = null;
    this.authService.resetPasswordOfAdmin(
      this.email,
      this.newPasswordForm.get('newPassword').value,
      this.idToken)
      .subscribe((answer) => {
        if (answer != null) {
          this.router.navigate(['./tokenSend'], {relativeTo: this.activeRoute});
        }
      });
  }

  private getParameters() {
    this.activeRoute.params['token'] = this.idToken;
    this.activeRoute.params['email'] = this.email;
  }

}
