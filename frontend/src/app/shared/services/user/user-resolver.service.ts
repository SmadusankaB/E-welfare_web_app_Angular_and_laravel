import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(
    private userService: UserService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getUser();
  }
}
