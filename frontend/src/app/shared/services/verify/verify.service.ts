import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobaldataService } from '../globaldata/globaldata.service';
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class VerifyService {

	apiRoot: string;
	apiId: string;

  constructor(
  	private httpClient: HttpClient,
  	private globalDataService: GlobaldataService,
  	private cookieService: CookieService
  	) { 

  	this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  doVerify(formData: any):Observable<any> {
  	
  	this.apiId = this.cookieService.get('id');
    
  	let url = `${this.apiRoot}/api/verify/${this.apiId}`;
  	return this.httpClient.post(
  		url,
  		formData
  		).catch(this.errorHandler);
  }

  private errorHandler(error:  HttpErrorResponse){
  	return Observable.throw(error);
  }

}
