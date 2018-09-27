import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AlertEmit } from '../interfaces/alert-emit';

@Injectable()
export class AlertService {

  constructor() { }


  alterSettings$ = new Subject<AlertEmit>();

  create(time: number, type: string, title:string, body: string){
  	this.alterSettings$.next({
      time, //number
  		type, //success, infor, danger, string
  		title, //string
  		body //string
  	});

  }



}
