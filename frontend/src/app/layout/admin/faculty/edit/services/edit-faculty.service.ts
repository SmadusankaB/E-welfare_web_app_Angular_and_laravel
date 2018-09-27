import { Injectable } from '@angular/core';
import { GlobaldataService } from '../../../../../shared/services/globaldata/globaldata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditFacultyService {

  apiRoot: '';

  constructor(
    private globalDataServie: GlobaldataService,
    private httpClient: HttpClient
  ) {
    this.apiRoot = this.globalDataServie.shareObj['apiRoot'];
  }

  public editFaculty(formData: any, facultyId: number) {
    const url = `${this.apiRoot}/api/faculty/${facultyId}`;

    return this.httpClient.put(
      url,
      formData
    ).catch(this.handleError);


   }

   private handleError(error: any) {
    return Observable.throw(error.error || 'Server Error');
  }



}
