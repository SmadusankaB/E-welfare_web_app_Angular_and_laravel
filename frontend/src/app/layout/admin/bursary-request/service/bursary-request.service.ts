import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BursaryRequestService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
   }

   /// load bursary requests for current year when page loading
  getBursaryRequests() {
    const url = `${this.apiRoot}/api/bursaryapp`;
    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // load bursary requests by year
  getBursaryRequestsByYear(year: number) {
    const url = `${this.apiRoot}/api/exchangeyear`;
    return this.httpClient.post(
      url,
      year
    ).catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
