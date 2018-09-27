import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserDashboardService } from '../user-dashboard.service';




@Injectable()
export class UserDashboardResolverService implements Resolve<any> {

  userId: number;

  constructor(
    private userDashboardServie: UserDashboardService,

  ) {

   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.userDashboardServie.getUserDashboardCounts();
  }

}
