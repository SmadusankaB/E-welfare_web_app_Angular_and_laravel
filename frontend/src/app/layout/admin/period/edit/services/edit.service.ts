import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GlobaldataService } from '../../../../../shared';

@Injectable()
export class EditService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
   }

   public editPeriod(formData: any, periodId: number) {
    const url = `${this.apiRoot}/api/period/${periodId}`;

    return this.httpClient.put(
      url,
      formData
    ).catch(this.handleError);


   }

   private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
