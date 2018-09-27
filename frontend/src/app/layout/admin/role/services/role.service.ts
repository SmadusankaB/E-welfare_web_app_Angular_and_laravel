import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleService {

  apiRoot: string;

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
   }

   getRoles() {

    let url  = `${this.apiRoot}/api/role`;

    return this.httpClient.get(
      url
    ).catch(this.handleError);

  }

  deleteRole(id: number) {

    let url = `${this.apiRoot}/api/role/${id}`;
    console.log(url);
    return this.httpClient.delete(
      url
    ).catch(this.handleError);

  }



  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
