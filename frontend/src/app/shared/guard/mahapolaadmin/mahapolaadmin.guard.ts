import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class MahapolaadminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // check the user is MAHAPOLA ADMIN or not to navigate requested (currently active) route.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if user is mahapola admin, navigate to requested route
    if (this.authService.isMahapolaAdmin) {
      return true;
    } else {
      // if user is not mahapola admin, navigate to access denied page
      this.router.navigate(['/u/access-denied']);
      return false;

    }
  }
}
