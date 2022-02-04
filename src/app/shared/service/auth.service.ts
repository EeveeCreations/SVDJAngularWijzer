import {Injectable} from "@angular/core";
import {Admin} from "../models/admin.model";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Router} from "@angular/router";
import * as shajs from 'sha.js';

@Injectable({providedIn: 'root'})
export class AuthService {
  public url: string = "";
  admin: BehaviorSubject<Admin> = new BehaviorSubject<Admin>(null);

  private tokenExpirationTimer;

  constructor(private http: HttpClient,
              private router: Router) {
    this.admin.subscribe(() => {
      if (this.admin != null && this.router.url === "/admin/login") {
        this.router.navigate(['/admin'])
      }
    });
    this.autoLogIn();
  }

  prepareURL(currentAuthenticationMethod: string) {
    this.url = "https://localhost:8443/" + currentAuthenticationMethod;
    return this.url;
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders({
      ContentType: 'application/json',
      Accept: 'application/json',
      // Origin:
      //   'http://localhost:4200'
    });
    return headerOfRequest;
  }

  autoLogIn() {
    const loadedAdmin: Admin = this.getAdminFromSessionStorage()
    if (!loadedAdmin) {
      return;
    }
    this.autoLogOut()
    if (loadedAdmin.token) {
      this.admin.next(loadedAdmin);
    }
  }

  passwordHash(password: string): string {
    return shajs('sha256').update(password).digest('hex');
  }

  logIn(adminName: string, password: string) {
    this.prepareURL('login');
    return this.http.post<{ username: string, role: string, accessToken: string, refreshToken: string }>(
      this.url, {}, {
        headers: this.prepareHeader(),
        params: {
          username: adminName,
          password: this.passwordHash(password)
        }
      }
    ).pipe(
      catchError(this.handleError)
      , map(dataRes => {
          return this.handleAuth(
            dataRes.username,
            dataRes.role,
            dataRes.accessToken,
            dataRes.refreshToken);
        }
      ));
  }

  getAdminFromSessionStorage(): Admin {
    const currentAdmin: {
      _refreshToken: string
      _role: string,
      _token: string,
      _username: string
    } = JSON.parse(sessionStorage.getItem('admin'));
    if (!currentAdmin) {
      return;
    }
    return new Admin(currentAdmin._username, currentAdmin._role, currentAdmin._token, currentAdmin._refreshToken);
  }

  private handleAuth(
    name: string,
    role: string,
    token: string,
    refreshToken: string) {
    const admin = new Admin(name, role.replace("[", '').replace("]", ''), token, refreshToken)
    sessionStorage.setItem("admin", JSON.stringify(admin));
    this.admin.next(admin);
    return admin;

  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Onbekende error';
    switch (errorRes.status) {
      case 418:
        errorMessage = 'Onjuiste inlog gegevens';
        break;
      case 401:
        errorMessage = 'Onjuiste inlog gegevens';
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {
    this.admin.next(null);
    sessionStorage.removeItem("admin");
    this.router.navigate(['./login']);
    if (this.tokenExpirationTimer) {
      clearTimeout();
    }
  }

  autoLogOut() {
    const MAX_MINUTES = 10 * 60 * 1000// Minutes - seconds - miliseconds
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, MAX_MINUTES)
  }
}
