import { Component, OnInit, Inject } from '@angular/core';
import { AddService } from './services/add.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  errorMessage: string;
  addPeriodForm: FormGroup;
  checked = false;

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addPeriodService: AddService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,

  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addPeriodForm = this.formBuilder.group({
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      status: ['', '']
    });
  }

  onSubmit(value, valid) {
    if (this.addPeriodForm.valid) {

      this.addPeriodService.startNewPeriod(this.addPeriodForm.value).subscribe(
        (success) => {

          this.dialogRef.close(1);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${success.name} successfully created.`
          );
          this.addPeriodForm.reset();
        },
        (error) => {
          this.dialogRef.close(0);
          this.alertService.create(
            3000,
            'danger',
            'Error',
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
