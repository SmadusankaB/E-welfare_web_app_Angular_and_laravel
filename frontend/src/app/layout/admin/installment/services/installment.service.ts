import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobaldataService } from '../../../../shared';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class InstallmentService {

  apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
   }


  // get all periods to fill select list
  // periodstartdate
  getPeriodsStartDate() {

    const url = `${this.apiRoot}/api/periodstartdate`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }


  // get data according to selcted period
  getInstallmentData(options: any) {
    const url = `${this.apiRoot}/api/periodscurrent`;
    return this.httpClient.post(
      url,
      options
    ).catch(this.handleError);
  }


  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
