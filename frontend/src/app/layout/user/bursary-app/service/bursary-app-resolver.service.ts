import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BursaryAppService } from './bursary-app.service';


@Injectable()
export class BursaryAppResolverService implements Resolve<any> {

  constructor(
    private bursaryAppService: BursaryAppService,

  ) {

   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.bursaryAppService.loadFormData();
  }

}
