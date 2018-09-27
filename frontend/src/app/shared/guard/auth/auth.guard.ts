// Local things from angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot/*test*/, RouterStateSnapshot /*test*/} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'; // test
// Global service
import { AuthService } from '../../services';

@Injectable()
export class AuthGuard implements CanActivate {
    // loggedInStatus: boolean = false;
    constructor(
        private router: Router,
        private authService: AuthService
     ) {}

    // auth guard check the user has token to navigate requesed (currently active) route.
    canActivate(
        next: ActivatedRouteSnapshot,
        satate: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {

           // if user has token, redirect to requested route.
            if (this.authService.hasToken()) {
                return true;
                // this.router.navigate(['/u/dashboard']);
            }else {
              // if the user does not has toekn, reditrect to login page.
                this.router.navigate(['/login']);
                return false;
            }

    }
}
