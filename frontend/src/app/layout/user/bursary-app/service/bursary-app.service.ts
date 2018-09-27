import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../shared';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BursaryAppService {

  apiRoot: '';
  userId: string;

  constructor(
    private globalDatServie: GlobaldataService,
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {
    this.apiRoot = this.globalDatServie.shareObj['apiRoot'];
    this.userId = this.cookieService.get('id');
  }

  loadFormData() {
    const url = `${this.apiRoot}/api/bursaryapp/${this.userId}/edit`;
    return this.httpClient.get(
      url
    ).catch(this.handleError);
  }

  // for form
  saveFormData(formData: any) {
    const url = `${this.apiRoot}/api/bursaryapp/${this.userId}`;
    return this.httpClient.put(
      url,
      formData
    ).catch(this.handleError);
  }

  // for image
  saveImageData(imageData: any){
    imageData.append('user_id', this.userId);
    const url = `${this.apiRoot}/api/bursaryimage`;
    return this.httpClient.post(
      url,
      imageData
    ).catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }



}
