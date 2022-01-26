import {Injectable} from "@angular/core";
import {Admin} from "../models/admin.model";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Md5} from "ts-md5";

@Injectable({providedIn: 'root'})
export class AuthService {
  public url: string = "";
  admin: BehaviorSubject<Admin> = new BehaviorSubject<Admin>(null);

  private tokenExpirationTimer;

  constructor(private http: HttpClient,
              private router: Router) {
    this.admin.subscribe(() => {
      this.router.navigate(['/admin']);
    })
  }

  prepareURL(currentAuthenticationMethod: string) {
    this.url = "https://localhost:8443/" + currentAuthenticationMethod;
    //178.62.233.221/
    return this.url;
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set('origin', 'http://localhost:4200');
    return headerOfRequest;
  }

  passwordHash(password: string): string {
    return Md5.hashStr(password);
  }

  logIn(adminName: string, password: string) {
    this.prepareURL('login');
    return this.http.post<{ name: string, role: string, accessToken: string, refreshToken: string }>(
      this.url, {}, {
        headers: this.prepareHeader(),
        params: {
          userName: adminName,
          password: this.passwordHash(password)
        }
      }
    ).pipe(
      catchError(this.handleError)
      , map(dataRes => {
          console.log(dataRes);
          return this.handleAuth(
            dataRes.name,
            dataRes.role,
            dataRes.accessToken,
            dataRes.refreshToken);
        }
      ));
  }

  private handleAuth(
    name: string,
    role: string,
    token: string,
    refreshToken: string) {
    const admin = new Admin(name,role, token, refreshToken)
    this.admin.next(admin);
    return admin;

  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Niet gerigistreede error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Deze email bestaat niet';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Het wachtwoord gaat niet met de email';
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {
    this.router.navigate(['./login']);
    this.admin.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout();
    }
  }

}
