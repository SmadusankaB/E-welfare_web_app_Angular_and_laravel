import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditService } from './services/edit.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  scholarshipEditForm: FormGroup;
  scholarshipNameErrorMsg: 'Enter Faculty Name';
  scholarshipId: number;


  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editScholarshipService: EditService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // get faculty id from row object
    this.scholarshipId = this.data.id;

    // Creare the form
    this.createScholarshipditForm();

    // Add curren values to form
    this.scholarshipEditForm.patchValue(this.data);
  }

  createScholarshipditForm(): any {
    this.scholarshipEditForm = this.formBuilder.group(
      {
        scholership_name: ['', Validators.required],
        amount: ['', Validators.required]
      }
    );
  }


  onSubmit(value, valid) {
    if (this.scholarshipEditForm.valid) {
      this.editScholarshipService.editScholarship(
        this.scholarshipEditForm.value, this.scholarshipId
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
            'success',
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
