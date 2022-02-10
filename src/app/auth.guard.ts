import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router)
  {  }
  canActivateChild(route: ActivatedRouteSnapshot,    state: RouterStateSnapshot  ): Observable<boolean> | Promise<boolean> | boolean {
   return this.canActivate(route, state)
  }

  canActivate(route: ActivatedRouteSnapshot,    state: RouterStateSnapshot  ): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.authService.isAuthenticated().then(isAuth => {
      if (isAuth) {
        return true
      } else
       {
        this.router.navigate(['/'], {    queryParams: {auth: false }  })
        return false;
      }
    })
  }
}
