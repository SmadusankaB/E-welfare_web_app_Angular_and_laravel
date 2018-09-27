import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { AddFacultyService } from './services/add-faculty.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  facultyAddForm: FormGroup;

  facultyNameErrorMsg: 'Enter Faculty Name';

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addFacultyService: AddFacultyService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }



  // Life-cycle hook
  ngOnInit() {
    this.createFacultyAddForm();
  }

  createFacultyAddForm(): any {
    this.facultyAddForm = this.formBuilder.group(
      {
        faculty_name: ['', Validators.required]
      }
    );
  }

  onSubmit(value, valid) {
    if (this.facultyAddForm.valid) {

      this.addFacultyService.addNewFaculty(
        this.facultyAddForm.value
      ).subscribe(
        (success) => {

          this.dialogRef.close(1);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${success.faculty_name} successfully added.`
          );
          this.facultyAddForm.reset();
        },

        ( error ) => {

          this.dialogRef.close(0);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${error.message}.`
          );
        }
      );
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
