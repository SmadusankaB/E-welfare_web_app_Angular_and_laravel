import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobaldataService } from '../globaldata/globaldata.service';

@Injectable()
export class ScholarshipService {

  apiRoot: string;

  constructor(
    private httpClient: HttpClient,
    private globalDataService: GlobaldataService
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  // get all faculties from database
  getScholarships() {

    const url = `${this.apiRoot}/api/scholarship`;

    return this.httpClient.get(
      url
    ).catch(
      this.handleError
    );
  }

  // delete faculty
  deleteScholarships(id: number) {
    const url = `${this.apiRoot}/api/scholarship/${id}`;

    return this.httpClient.delete(
      url
    ).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {

    return Observable.throw(error);
  }

}
