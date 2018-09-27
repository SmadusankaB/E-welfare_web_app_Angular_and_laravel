import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../../shared/services/globaldata/globaldata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddPostService {

  apiRoot: '';

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
  }

  // Add new post into database
  addNewPost( formData: any) {

    const url = `${this.apiRoot}/api/post`;

    return this.httpClient.post(
      url,
      formData
    ).catch(this.handleError);


   }

   private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
