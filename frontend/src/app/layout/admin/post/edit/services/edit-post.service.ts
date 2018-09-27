import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GlobaldataService } from '../../../../../shared';

@Injectable()
export class EditPostService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
   }

   public editPost(formData: any, postId: number) {
    const url = `${this.apiRoot}/api/post/${postId}`;

    return this.httpClient.put(
      url,
      formData
    ).catch(this.handleError);


   }

   private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
