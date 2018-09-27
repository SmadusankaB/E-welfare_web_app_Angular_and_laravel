import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobaldataService } from '../../../../shared';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserDashboardService {


  apiRoot: string;
  userId: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService,
    private cookeiService: CookieService
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
    this.userId = this.cookeiService.get('id');
    console.log(this.userId);
  }



  // get user dashboard counts
  getUserDashboardCounts() {

    const url  = `${this.apiRoot}/api/dashboraduser/${this.userId}`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
