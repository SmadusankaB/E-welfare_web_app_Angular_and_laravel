import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { GlobaldataService } from '../globaldata/globaldata.service';
import { Router } from '@angular/router';


@Injectable()
export class LogoutService {

  apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private globalDataService: GlobaldataService,
    private router: Router
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  logout() {
    const url = this.apiRoot + `/api/logout`;

    this.httpClient.get(
      url
    ).subscribe(
      suc => {
        this.cookieService.delete('token');
        this.cookieService.delete('role');
        this.cookieService.delete('id');
        this.cookieService.deleteAll();
        this.router.navigate(['']);
       // console.log("fuck"+this.cookieService.get('id'));

      },
      err => {
        this.cookieService.delete('token');
        this.cookieService.delete('role');
        this.cookieService.deleteAll();
      }

    );

  }

}
