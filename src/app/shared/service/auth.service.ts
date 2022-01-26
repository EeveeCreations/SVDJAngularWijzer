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
      if (this.admin != null) {
        this.router.navigate(['/admin/advies']);
      }
      this.router.navigate(['./login']);
    });
    this.autoLogIn();
  }

  prepareURL(currentAuthenticationMethod: string) {
    this.url = "https://localhost:8443/" + currentAuthenticationMethod;
    return this.url;
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.append('Content-Type', 'application/json');
    headerOfRequest.append('Accept', 'application/json');
    headerOfRequest.set('Origin', 'http://localhost:4200');
    return headerOfRequest;
  }

  autoLogIn() {
    const loadedAdmin: Admin = this.getAdminFromsessionStorage()
    if (!loadedAdmin) {
      return;
    }
    console.log("logged in!")
    this.autoLogOut()
    if (loadedAdmin.token) {
      this.admin.next(loadedAdmin);
    }
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
          username: adminName,
          password: this.passwordHash(password)
        }
      }
    ).pipe(
      catchError(this.handleError)
      , map(dataRes => {
          return this.handleAuth(
            dataRes.name,
            dataRes.role,
            dataRes.accessToken,
            dataRes.refreshToken);
        }
      ));
  }

  getAdminFromsessionStorage(): Admin {
    const currentAdmin: {
      role: string,
      _token: string,
      _refreshToken: string
    } = JSON.parse(sessionStorage.getItem('currentAdmin'));
    if (!currentAdmin) {
      return;
    }
    console.log(currentAdmin)
    return new Admin("admin", currentAdmin.role, currentAdmin._token, currentAdmin._refreshToken);
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
        errorMessage = 'Deze email bestaat niet';
        break;
      case 401:
        errorMessage = 'Het wachtwoord gaat niet met de email';
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {
    this.admin.next(null);
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
