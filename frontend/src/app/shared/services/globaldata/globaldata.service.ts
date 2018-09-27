import { Injectable } from '@angular/core';


interface ShareObj {
  [id: string]: any;
}


@Injectable()
export class GlobaldataService {


  constructor() { }

  shareObj: ShareObj = {
    apiRoot : "http://127.0.0.1:8000"
  };

}
