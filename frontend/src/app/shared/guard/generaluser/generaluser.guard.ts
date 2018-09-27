import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class GeneraluserGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  // check the user is GENERAL USER or not to navigate requested (currently active) route.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if user is general user, navigate to requested route
    if (this.authService.isGeneral) {
      return true;
    } else {
      // if user is not general user, navigate to access denied page
      this.router.navigate(['/u/access-denied']);
      return false;
    }
  }
}
