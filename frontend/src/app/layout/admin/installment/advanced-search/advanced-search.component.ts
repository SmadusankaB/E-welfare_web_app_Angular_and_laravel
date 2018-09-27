import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FacultyService } from '../../../../shared/services/faculty/faculty.service';
import { ScholarshipService } from '../../../../shared/services/sholarship/scholarship.service';
import { InstallmentService } from '../services/installment.service';

declare const $;

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
  periods: any;

  years: number[] = [];
  current_year: number;

  constructor(
    public dialogRef: MatDialogRef<AdvancedSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private facultyService: FacultyService,
    private scholService: ScholarshipService,
    private installmentService: InstallmentService,

  ) { }

  ngOnInit() {
    // load faculties
    this.getFaculties();

    // load scholarships
    this.getScholarships();

    // load periods
    this.getPeriodsStartDate();

    this.makeYears();

    this.createForm();

  }

  createForm() {
    this.userSearchForm = this.formBuilder.group({
      faculty_name: ['', ''],
      period_start_date: ['', ''],
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

  // for year dropdown
  makeYears() {
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year; i > 2000; i--) {
      // console.log(i);
      this.years.push(i);
    }

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

  getPeriodsStartDate() {
    this.installmentService.getPeriodsStartDate().subscribe(
      (success) => {
        // console.log(success);
        this.periods = success['complete'];
      },
      (error) => {

      }
    );
  }


  cancel() {
    this.dialogRef.close(0);
  }

}
