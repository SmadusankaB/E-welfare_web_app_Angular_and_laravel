import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BursaryRequestApproveService {

  apiRoot: string;

  constructor(
    private globalDataService: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // approve bursary.
  // it means that update scholarship_id column in users table of requested user
  approveBursary(userId: string, data: any) {
    const url = `${this.apiRoot}/api/bursaryapprove/${userId}`;

    return this.httpClient.post(
      url,
      data
    ).catch(this.handleError);
  }


  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }


}
