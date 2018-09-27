import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GlobaldataService } from '../../../shared';

@Injectable()
export class TestTableService {
 
  apiRoot:string;
  
 
  constructor(private httpClient: HttpClient,
  		      private globalDataService: GlobaldataService
  	) { 
  	this.apiRoot = this.globalDataService.shareObj['apiRoot'];
  }

  //get all users into data table
  getUsers(){
    let url =  `${this.apiRoot}/api/fuck`;
    return this.httpClient.get(url);
    
  } 

}
