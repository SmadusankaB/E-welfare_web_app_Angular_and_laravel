import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GlobaldataService } from '../../../../shared/services/globaldata/globaldata.service';

@Injectable()
export class PostService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    // set base url
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];

  }

  // get all posts
  getPosts() {
    let url  = `${this.apiRoot}/api/post`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // Delete parcular post
  deletePost(id: number) {

    let url = `${this.apiRoot}/api/post/${id}`;
    //console.log(url);

    return this.httpClient.delete(
      url
    ).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }
}
