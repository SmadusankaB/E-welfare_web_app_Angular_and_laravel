import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobaldataService } from '../globaldata/globaldata.service';


@Injectable()
export class LoginService {

   apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService
    ) {
        this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  logIn(formData: any): Observable<any> {

    const url = `${this.apiRoot}/api/login`;

    return this.httpClient.post(
        url,
        formData
        ).catch(this.handleError);

  }

    private handleError(error: HttpErrorResponse) {

            return Observable.throw(error);
    }


}
