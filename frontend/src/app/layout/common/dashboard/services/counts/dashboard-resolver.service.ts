import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DashboardService } from '../dashboard.service';

@Injectable()
export class DashboardResolverService implements Resolve<any> {

  constructor(
    private dashboardServie: DashboardService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dashboardServie.getDashboardCounts();
  }

}
