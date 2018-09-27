import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobaldataService } from '../../../../shared';

@Injectable()
export class DashboardService {

  apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // get admin dashboard counts
  getDashboardCounts() {

    const url  = `${this.apiRoot}/api/dashborad`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }




  // get users according to the value (year) of selct list for Doughnut
  getUserByYearsForDoughnut(year: number) {
    const url = `${this.apiRoot}/api/dashboarddoughnut/${year}`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // get months of current year
  getCurrentMonths() {
    const url = `${this.apiRoot}/api/currentmonths`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // get users according to the value (year) of selct list for Barchart
  getUserByYearsForBarChart(year: number) {
    const url = `${this.apiRoot}/api/dashboardbarchart/${year}`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // get signed users realtime
  getSignedUserRealtime() {
    const url = `${this.apiRoot}/api/signedstu`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }




  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }
}
