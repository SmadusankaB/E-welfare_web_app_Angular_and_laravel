import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditFacultyService } from './services/edit-faculty.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  facultyEditForm: FormGroup;
  facultyNameErrorMsg: 'Enter Faculty Name';
  facultyId: number;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editFacultyService: EditFacultyService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    // get faculty id from row object
    this.facultyId = this.data.id;

    // Creare the form
    this.createFacultyEditForm();

    // Add curren values to form
    this.facultyEditForm.patchValue(this.data);
  }

  createFacultyEditForm(): any {
    this.facultyEditForm = this.formBuilder.group(
      {
        faculty_name: ['', Validators.required]
      }
    );
  }

  onSubmit(value, valid) {
    if (this.facultyEditForm.valid) {
      this.editFacultyService.editFaculty(
        this.facultyEditForm.value, this.facultyId
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
