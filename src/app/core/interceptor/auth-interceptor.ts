// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '@environments/environment';
// import { Observable } from 'rxjs';

// import { ConfigService } from '../../shared/services/config.service';


// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//     constructor(private configService : ConfigService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // add auth header with jwt if account is logged in and request is to the api url
//         const config = this.
//         const isLoggedIn = config?.token;
//         const isApiUrl = request.url.startsWith(environment.apiUrl);
//         if (isLoggedIn && isApiUrl) {
//             request = request.clone({
//                 setHeaders: { Authorization: `Bearer ${config.token}` }
//             });
//         }

//         return next.handle(request);
//     }
// }