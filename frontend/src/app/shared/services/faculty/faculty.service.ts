import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobaldataService } from '../globaldata/globaldata.service';

@Injectable()
export class FacultyService {

  apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // get all faculties from database
  getFaculties() {

    let url = `${this.apiRoot}/api/faculty`;

    return this.httpClient.get(
      url
    ).catch(
      this.handleError
    );
  }

  // delete faculty
  deleteFaculty( id: number ) {
    let url = `${this.apiRoot}/api/faculty/${id}`;

    return this.httpClient.delete(
      url
    ).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {

    return Observable.throw(error);
}

}
