import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeriodService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
  }

  public getPeriods() {

    let url  = `${this.apiRoot}/api/period`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }

  
  deletePeriod(id: number) {

    let url = `${this.apiRoot}/api/period/${id}`;
    // console.log(url);
    return this.httpClient.delete(
      url
    ).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }


}
