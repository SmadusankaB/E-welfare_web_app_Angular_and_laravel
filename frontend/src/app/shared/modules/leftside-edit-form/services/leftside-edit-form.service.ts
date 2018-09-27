import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { LeftsideEditForm } from '../interface/leftside-edit-form';

@Injectable()
export class LeftsideEditFormService {

  private oldData = new BehaviorSubject<any>('');
  newData = this.oldData.asObservable();

  private status = new BehaviorSubject<string>('out');
  newEditFormStatus = this.status.asObservable();

  public rowEditableData$ = new Subject<any>();

  public updateState$ = new Subject<boolean>();

  constructor() { }

  //from leftedit com to useraccount com
  changeStatus(state: string) {
    this.status.next(state);

  }

  //form useraccount component to leftedit component
  passSelectedEditRowData(formData: any) {
    this.rowEditableData$.next(formData);
  }

  //from leftedit com to useraccount com
  passUpdateState(state: boolean) {
    this.updateState$.next(state);
  }

}
