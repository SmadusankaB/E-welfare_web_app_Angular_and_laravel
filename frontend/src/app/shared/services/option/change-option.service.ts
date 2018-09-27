import { Injectable } from '@angular/core';
import { GlobaldataService } from '../globaldata/globaldata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChangeOptionService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
   }

   getOptions() {

    const url  = `${this.apiRoot}/api/option`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }

  deleteOption(id: number) {

    const url = `${this.apiRoot}/api/option/${id}`;
    console.log(url);
    return this.httpClient.delete(
      url
    ).catch(this.handleError);

  }



  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }


}
