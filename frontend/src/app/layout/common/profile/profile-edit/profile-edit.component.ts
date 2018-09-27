import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService, User } from '../../../../shared';
import { Router } from '@angular/router';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { LoaderService } from '../../../../shared/modules/loader/services/loader.service';
import { FacultyService } from '../../../../shared/services/faculty/faculty.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface Faculty {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  user: User[] = [];
  firstNameErrorMeg = 'Enter First Name';
  lastNameErrorMsg = 'Enter Last Name';

  faculties: any;

  // rich text editor opions
  public options: Object = {
    placeholderText: 'Add profile summary here!',
    charCounterCount: false,
    height: 200 ,
  };

  errorMessage: string;
  editResponse: boolean;

  // faculty getting from backend
  backendFaculty: string;

  // entrance year getting gtom backend
  backendYear: number;

  // year array to set sentrance year select list
  years: number []= [];

  userEditForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private loaderService: LoaderService,
    private facultyService: FacultyService,
    public dialogRef: MatDialogRef<ProfileEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}



  ngOnInit() {
    // load faculties
    this.getFaculties();

    this.createEditForm();

    this.onEdit();
    // this.loaderService.showLoader();

    this.makeYears();
  }

  // create edit user form
  createEditForm() {
    this.userEditForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      faculty_name: ['', ''],
      entrance_year: [ '', ''],
      profile_summary: ['', '']
    });
  }

 // Loading from backend
  onEdit() {

    this.userService.editUser().subscribe((user: User[]) => {

      this.backendFaculty = user[0].faculty_name;
      this.backendYear = user[0].entrance_year;
      this.userEditForm.patchValue(user[0]);

      // console.log(this.backendFaculty);

    });

  }

  // updated user
  onSubmit(value, valid) {
    // this.loaderService.showLoader();
    if (this.userEditForm.valid) {
      this.dialogRef.close(1);
        /* console.log(this.userEditForm.value);*/
        this.userService.updateUser(this.userEditForm.value).subscribe(
          (response: boolean) => {
        this.editResponse = response;
        // console.log(this.editResponse);
// this.loaderService.hideLoader();
        this.router.navigate(['/u/profile']);
        this.alertService.create(
          2000,
          'success',
          'Sucsess',
          'Successfully Updated');
      },
      (error) => {
        this.dialogRef.close(0);
      }
      );
    }
  }


  makeYears() {
    for (let i: number = new Date().getFullYear(); i > 1900; i--) {
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


  cancel() {
    this.dialogRef.close();
  }
}
