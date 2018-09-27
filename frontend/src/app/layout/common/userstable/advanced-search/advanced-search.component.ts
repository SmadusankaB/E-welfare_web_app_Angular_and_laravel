import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { UsersService } from '../../../../shared/services/users/users.service';
import { FacultyService } from '../../../../shared/services/faculty/faculty.service';
import { ScholarshipService } from '../../../../shared/services/sholarship/scholarship.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  userSearchForm: FormGroup;

  // collect faculties in database
  faculties: any;

  // collect scholarshps in the database
  scholarships: any;

  // year array to set sentrance year select list
  years: number[] = [];
  current_year: number;

  constructor(
    public dialogRef: MatDialogRef<AdvancedSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private usersService: UsersService,
    private facultyService: FacultyService,
    private scholService: ScholarshipService
  ) { }

  ngOnInit() {
    // load faculties
    this.getFaculties();

    // load scholarships
    this.getScholarships();

    this.createForm();
    this.makeYears();
  }

  createForm() {
    this.userSearchForm = this.formBuilder.group({
      faculty_name: ['', ''],
      entrance_year: ['', ''],
      scholership_name: ['', '']
    });
  }

  onSubmit(value, valid) {
    if (this.userSearchForm.valid) {
      // console.log(this.userSearchForm.value);
      this.dialogRef.close(this.userSearchForm.value);
    }
  }



  // for year dropdown
  makeYears() {
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year; i > 2000; i--) {
      // console.log(i);
      this.years.push(i);
    }

  }

  // get faculties to fill the select list
  getFaculties() {
    this.facultyService.getFaculties().subscribe(
      (success) => {
        // console.log(success);
        this.faculties = success.complete;
      },
      (error) => {

      }
    );
  }

  // get faculties to fill the select list
  getScholarships() {
    this.scholService.getScholarships().subscribe(
      (success) => {
        // console.log(success);
        this.scholarships = success.complete;
      },
      (error) => {

      }
    );
  }


  cancel() {
    this.dialogRef.close(0);
  }

}
