// Local things from angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
// Global service
import { AuthService } from '../../services';

@Injectable()
export class SuperadminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // check the user is SUPER ADMIN or not to navigate requested (currently active) route.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // if user is super admin, navigate to requested route
    if (this.authService.isSuperAdmin) {

      return true;
    } else {
      // if user is not super admin, navigate to access denied page
      this.router.navigate(['/u/access-denied']);
      return false;
    }
  }
}
