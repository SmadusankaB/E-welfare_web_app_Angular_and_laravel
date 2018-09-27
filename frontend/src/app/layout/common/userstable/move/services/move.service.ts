import { Injectable } from '@angular/core';

import { GlobaldataService } from '../../../../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MoveService {

  apiRoot: string ;

  constructor(
    private globalDataService: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // record, change
  getInstallmentsData(userId: number) {
   //  console.log(userId);
    const url = `${this.apiRoot}/api/dashboraduser/${userId}`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
