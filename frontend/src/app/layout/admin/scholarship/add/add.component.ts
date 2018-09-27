import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { AddService } from './services/add.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  scholarshipAddForm: FormGroup;

  scholarshipNameErrorMsg: 'Enter Faculty Name';

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addScholarshipService: AddService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }


  ngOnInit() {
    this.createScholarshipAddForm();
  }

  createScholarshipAddForm(): any {
    this.scholarshipAddForm = this.formBuilder.group(
      {
        scholership_name: ['', Validators.required],
        amount: ['', Validators.required]
      }
    );
  }

  onSubmit(value, valid) {
    if (this.scholarshipAddForm.valid) {

      this.addScholarshipService.addNewScholarship(
        this.scholarshipAddForm.value
      ).subscribe(
        (success) => {

          this.dialogRef.close(1);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${success.scholership_name} successfully added.`
          );
          this.scholarshipAddForm.reset();
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
