import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Admin} from "../../shared/models/admin.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.checkAuthentication();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,
        [Validators.required]),
      'password': new FormControl(null,
        [Validators.required, Validators.min(6)]),
    });
  }

  private checkAuthentication() {
    const name = this.loginForm.get('email').value;
    const pass = this.loginForm.get('password').value;
    let authObs: Observable<Admin>;

    authObs = this.authService.logIn(name, pass).pipe(tap(answer => {
      console.log(answer)
    }));
    authObs.subscribe(answer => {

    }, errorMes => {
      this.error = errorMes;
    });
  }
}
