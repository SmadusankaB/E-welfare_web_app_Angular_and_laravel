import { Component, OnInit, Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { EditService } from './services/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  periodEditForm: FormGroup;
  periodId: number;
  checked = false;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editPeriodService: EditService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // get post id from row object
    this.periodId = this.data.id;

    // Creare the form
    this.createPeriodEditForm();

    // Add curren values to form
    this.periodEditForm.patchValue(this.data);
  }

  createPeriodEditForm() {

    this.periodEditForm = this.formBuilder.group({

      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      status: ['', ''],

    });
  }

  onSubmit(value, valid) {

    if (this.periodEditForm.valid) {
      this.editPeriodService.editPeriod(
        this.periodEditForm.value, this.periodId
      ).subscribe(
        (success) => {
          this.dialogRef.close(1);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `successfully updated.`
          );
        },
        (error) => {
          this.dialogRef.close(0);
          this.alertService.create(
            3000,
            'danger',
            'Success',
            `${error.message}.`
          );
        });
    }

  }

  cancel() {
    this.dialogRef.close();
  }

}
