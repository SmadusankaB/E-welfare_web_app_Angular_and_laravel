import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// Global services
import { GlobaldataService } from '../globaldata/globaldata.service';
import { CookieService } from 'ngx-cookie-service';
// global model
import { User } from '../../models/user/user';

@Injectable()
export class UserService {


  apiRoot: string;
  user: User[];

  constructor(
    private httpClient: HttpClient,
    private globalData: GlobaldataService,
    private cookieService: CookieService
    ) {

      this.apiRoot = this.globalData.shareObj['apiRoot'];

    }

  // used in user-details component
  getUser(): Observable<User[]> {
    const apiId = +this.cookieService.get('id');
    const url = `${this.apiRoot}/api/user/${apiId}`;
    return this.httpClient.get(
        url
        ).catch(this.handleError);
  }

  // Used in user-edit component
  editUser(): Observable<User[]> {
    const apiId = +this.cookieService.get('id');
    const url = `${this.apiRoot}/api/user/${apiId}/edit`;

    return this.httpClient.get(
      url
      ).catch(this.handleError);
   }


  // used in user-edit component
  updateUser(formData: any): Observable<boolean> {
    const apiId = this.cookieService.get('id');

    const url = `${this.apiRoot}/api/user/${apiId}`;
    return this.httpClient.put(
      url,
      formData
      ).catch(this.handleError);
  }

   private handleError(error: any) {
      console.error(error);
      return Observable.throw(error.error || 'Server error');
  }

}
