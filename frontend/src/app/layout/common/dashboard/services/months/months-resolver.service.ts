import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Injectable()
export class MonthsResolverService implements Resolve<any> {

  constructor(
    private dashboardServie: DashboardService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
      return this.dashboardServie.getCurrentMonths();
  }

}
