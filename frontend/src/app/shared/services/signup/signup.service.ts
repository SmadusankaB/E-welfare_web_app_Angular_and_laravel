import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobaldataService } from '../globaldata/globaldata.service';
import 'rxjs/add/observable/throw';

@Injectable()
export class SignupService {

	apiRoot: string ;

  constructor(
  	private httpClient: HttpClient,
  	private globalDataService: GlobaldataService
  	) {

  		this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  	 }

  signUp(formData: any): Observable<any>{
  	let url = `${this.apiRoot}/api/register`;
  	return this.httpClient.post(
  		url,
  		formData
  		).catch(this.handleError);
  }

  private handleError(error:  HttpErrorResponse){
  	
  	return Observable.throw(error);
  }



}
