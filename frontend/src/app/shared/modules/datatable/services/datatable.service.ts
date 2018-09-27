import { Injectable } from '@angular/core';
import { Datatable } from '../interfaces/datatable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatatableService {

  searchFormState$ = new Subject<string>();
  editFormState$ = new Subject<string>();
  rowEditableData$ = new Subject<Datatable>();
  searchOptions$ = new Subject<any>();
  updateState$ = new Subject<boolean>();


  constructor() { }

  //form datatable component to leftedit component 
  passSelectedEditRowData(data: Datatable){
  	this.rowEditableData$.next(data);
  }

  //from advanced search com to datatable com
  passSearchOptions(options: any){
    this.searchOptions$.next(options);
  }

  //from leftedit com to datatable com
  passUpdateState(state: boolean){
    this.updateState$.next(state);
  }

  //from table component to useraccount com instead of slid in search form
  changeSerchFormState(state: string){
    this.searchFormState$.next(state);
  }

  //from table component to useraccount com instead of slid in edit form
  changeEditFormSate(state: string){
    this.editFormState$.next(state);
  }





}
