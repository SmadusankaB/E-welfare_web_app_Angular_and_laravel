import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { UsersService } from '../../../../shared/services/users/users.service';
import { FacultyService } from '../../../../shared/services/faculty/faculty.service';
import { ScholarshipService } from '../../../../shared/services/sholarship/scholarship.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editUserForm: FormGroup;
  userId: number;
  accountStatus = false;
  scholarshipStatus = false;



  // collect faculties in database
  faculties: any;

  // collect scholarshps in the database
  scholarships: any;

  // year array to set sentrance year select list
  years: number []= [];
  current_year: number ;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private usersService: UsersService,
    private facultyService: FacultyService,
    private scholService: ScholarshipService,

  ) { }

  ngOnInit() {
    this.userId = this.data.id;

    // load faculties
    this.getFaculties();

    // load scholarships
    this.getScholarships();

    // create years
    this.makeYears();

    this.createForm();
    this.editUserForm.patchValue(this.data);
  }

  // create form
  createForm() {
     // console.log(this.data);
    this.accountStatus = this.data.is_activated;
    this.scholarshipStatus = this.data.scholership_status;
    this.editUserForm = this.formBuilder.group({
      faculty_name: ['', Validators.required],
      entrance_year: ['', Validators.required],
      scholership_name: ['', Validators.required],
      is_activated: ['', ''],
      scholership_status: ['', '']
    });
  }

  onSubmit(value, valid) {
    console.log(this.data);
    // console.log(this.editUserForm.value);
    if (this.editUserForm.valid) {
        this.usersService.updateSlectedUser(
        this.editUserForm.value, this.userId
      ).subscribe(
        (success) => {

          this.dialogRef.close(1);

        },
        (error) => {
          this.dialogRef.close(0);

        });
    }

  }

  // for year dropdown
  makeYears() {
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year ; i > 2000; i--) {
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
    this.dialogRef.close();
  }


}
