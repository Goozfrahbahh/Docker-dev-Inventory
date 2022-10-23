import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanActivate, CanMatch {
       constructor(private authService: AuthService,
                                    private router: Router) { }

       canActivate(
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): true|UrlTree {
              const url: string = state.url;

              return this.checkLogin(url);
       }





       checkLogin(url: string): true| UrlTree {
              if (this.authService.isAuthenticated$) {
                     return true;
              }
       // Store the attempted URL for redirecting
       this.authService.redirectUrl = url
       
       // Redirect the user to the login page
       return this.router.parseUrl('./login')
       }
}