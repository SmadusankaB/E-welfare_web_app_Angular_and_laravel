import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Users } from '../../models/users/users';
import { GlobaldataService } from '../globaldata/globaldata.service';

@Injectable()
export class UsersService {

  apiRoot: string;
  users: Users[];

  constructor(
    private globalDataService: GlobaldataService,
    private httpClient: HttpClient
    ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // get all users into data table according to search form
  getUsers(formData: any)/*:Observable<Users[]>*/{
    let url =  `${this.apiRoot}/api/search`;
    return this.httpClient.post(url, formData);

  }

  private extractData(res) {
    const body = res;
    return body.complete || {};
  }

  // update selected user, only email and student no by admin
  updateSlectedUser(formData: any, id: number): Observable<boolean>{
    let url = `${this.apiRoot}/api/userupdate/${id}`;
    return this.httpClient.put(
      url,
      formData
      )
      .catch(this.handleError);
  }

  // delete by admin
  deleteUser(id: number) {
   let url =  `${this.apiRoot}/api/user/${id}`;
   return this.httpClient.delete(
     url)
    .catch(this.handleError);
  }

  // store by admin using csv
  store(formData: any){
    let url  = `${this.apiRoot}/api/user`;

    return this.httpClient.post(
      url,
      formData)
    .catch(this.handleError);

  }


  private handleError(error:  HttpErrorResponse){

    return Observable.throw(error);
  }
}
