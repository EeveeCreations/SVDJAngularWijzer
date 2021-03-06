import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
              : boolean | UrlTree |
              Observable<boolean | UrlTree> |
              Promise<boolean | UrlTree> {

    if(state.url.startsWith("/admin")) {
      return this.authService.admin.pipe(
        take(1)
        , map(
          admin => {
            const isNotAuth = !!admin;
            if (isNotAuth) {
              return true;
            }
            return this.router.createUrlTree(['/admin/login']);
          }));
    }
    return true;
  }
}
