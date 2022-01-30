// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
//
// import { AuthService } from './auth.service';
// import {Observable} from "rxjs";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     if (request.url )
//     request = request.clone({
//       setHeaders: {
//         'Content-Type' : 'application/json; charset=utf-8',
//         'Accept'       : 'application/json',
//         'Authorization': `Bearer ${AuthService.getToken()}`,
//       },
//     });
//
//     return next.handle(request);
//   }
// }
