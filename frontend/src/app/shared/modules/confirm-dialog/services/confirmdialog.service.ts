import { Injectable , EventEmitter, Output, TemplateRef} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ResolveEmit } from '../interfaces/resolve-emit';
import { ConfirmEmit } from '../interfaces/confirm-emit';

@Injectable()
export class ConfirmdialogService {

  confirmation$ = new Subject<ConfirmEmit>();
 
  constructor() { }

  create(
    title: string ,
    message: string,
    backColor: string,
    color: string ){

    const resolve$ = new Subject<ResolveEmit>();


    //parameters
    //1.title
    //2.message
    //3.color
    //4.background color

    this.confirmation$.next({
        title, //string
        message, //string
        backColor,  //string
        color,  //string
        resolve$
      });
   
    //retrun true or false
    return resolve$;
  }

  

}
