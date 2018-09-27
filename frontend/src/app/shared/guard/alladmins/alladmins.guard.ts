import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Injectable()
export class AlladminsGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isGeneral) {
    this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
