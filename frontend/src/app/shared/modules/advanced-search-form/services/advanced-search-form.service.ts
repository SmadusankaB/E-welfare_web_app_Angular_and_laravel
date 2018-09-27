import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AdvancedSearchForm } from '../interfaces/advanced-search-form';

@Injectable()
export class AdvancedSearchFormService {
  
  //pass search form data into another component via this service
	searchOptions$ = new Subject<AdvancedSearchForm>();
	newSearchOptions = this.searchOptions$.asObservable();


	//set default state of advanced search form
	public searchFormStatus = new BehaviorSubject<string>('out');
	newSearchFormStatus = this.searchFormStatus.asObservable();


  constructor() { }

  //from search com to useraccount
  passSearchFormOptions(formData: AdvancedSearchForm){
  	this.searchOptions$.next(formData);
  }

  //call in search form to slide out search form
  changeSearchFormState(state: string){
    this.searchFormStatus.next(state);
  }

}
