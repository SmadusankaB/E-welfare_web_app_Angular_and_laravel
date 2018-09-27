import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GlobaldataService } from '../../../../../shared';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EditRoleService {

  apiRoot: string;

  constructor(
    private globalDataSerivce: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataSerivce.shareObj['apiRoot'];
  }

  // update selected role
  updateRole(formData: any, id: number) {

    const url = `${this.apiRoot}/api/role/${id}`;
    console.log(url);

    return this.httpClient.put(
      url,
      formData
    ).catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }

}
