import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  loaderStatus$ = new Subject<boolean>()

  constructor() { }

  showLoader(){
  	this.loaderStatus$.next(true);
  }

  hideLoader(){
  	this.loaderStatus$.next(false);
  }




}
