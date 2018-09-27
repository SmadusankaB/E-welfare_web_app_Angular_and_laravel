import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { AdvancedSearchFormService } from './services/advanced-search-form.service';

@Component({
  selector: 'app-advanced-search-form',
  templateUrl: './advanced-search-form.component.html',
  styleUrls: ['./advanced-search-form.component.scss']
})
export class AdvancedSearchFormComponent implements OnInit {

  // year array to set sentrance year select list
  years: number []= [];
  current_year: number ;

  serchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  	private  adSearchFormService: AdvancedSearchFormService
  	 ) { }

  ngOnInit() {

    this.createForm();
    this.makeYears();

  }

  createForm(){
    this.serchForm = this.formBuilder.group({
      faculty_name: ['', ''],
      entrance_year:['',''],
      scholership_name:['','']
    });
  }

  onSubmit(value, valid){
    //pass new data to useracount com
    console.log(this.serchForm.value);
    if(this.serchForm.valid){
      this.adSearchFormService.passSearchFormOptions(this.serchForm.value);
    }
  }

  //from searchfrom com to useraccount com
  toggleSearchForm(){
  	this.adSearchFormService.changeSearchFormState('out');
  }

  //for year dropdown
  makeYears(){
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year ; i > 2000; i--){
          //console.log(i);
          this.years.push(i)
    }

  }

}
