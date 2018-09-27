import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../shared/services/globaldata/globaldata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonPostsService {

  apiRoot: string;

  // Constructor
  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {

    // set base url
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];

  }

  // get common posts
  getCommonPosts(pageNumber: number){

    // full url
    const url = `${this.apiRoot}/api/commonposts?page=${pageNumber}`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }


  // Handle errors
  private handleError(error: any){
    return Observable.throw(error.error||'Server Error');
  }

}
