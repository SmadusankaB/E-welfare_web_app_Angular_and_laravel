import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { GlobaldataService }  from '../globaldata/globaldata.service';
import { CookieService } from 'ngx-cookie-service';
import { ProfilePicture } from '../../models/profile-picture/profilePicture';

@Injectable()
export class ProfileImageService {

	apiRoot:string;
	apiToken:string;
	profilePicture:ProfilePicture[];

  constructor(
  	private globalData: GlobaldataService,
  	private http: Http,
  	private cookieService: CookieService

  	) {

  		this.apiRoot = this.globalData.shareObj['apiRoot'];
  		

 	 }

  getProfilePicture(): Observable<ProfilePicture[]>{
 	
  	  let url = `${this.apiRoot}/api/image`;
  	  this.apiToken = this.cookieService.get('token');

      const headerDict = {
        'Authorization': 'Bearer ' + this.apiToken,
      }

      const requestOptions = {
        headers : new Headers(headerDict),
      };


      return this.http.get(
      	url,
      	requestOptions
      	).map((res) => {
       
        this.profilePicture = res.json();

        return this.profilePicture;
      })
      .catch(this.handleError);

  }


  private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}
