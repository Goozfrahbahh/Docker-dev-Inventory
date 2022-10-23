import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';

import { User } from '../constants/User';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  API_URL: string = "http://localhost:4000";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};

  isLoggedIn: boolean = false;    
  constructor(private httpClient: HttpClient, public router: Router) {}

  register(user: User): Observable<any> {
    return this.httpClient
      .post(`${this.API_URL}/users/register`, user)
      .pipe(catchError(this.handleError));
  }

  login(): Observable<boolean> {
       return of(true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = true)
       )
  }

  // login(user: User) {
  //   return this.httpClient
  //     .post<any>(`${this.API_URL}/users/login`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem("access_token", res.token);
  //       this.getUserProfile(res._id).subscribe((res) => {
  //         this.currentUser = res;
  //         this.router.navigate(["users/profile/" + res.msg._id]);
  //       });
  //     });
  // }


  

  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  get IsLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  // logout() {
  //   if (localStorage.removeItem("access_token") == null) {
  //     this.router.navigate(["users/login"]);
  //   }
  // }

  getUserProfile(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers })
      .pipe(
        map((res: any) => id === res.id),
        map((res) => res),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
