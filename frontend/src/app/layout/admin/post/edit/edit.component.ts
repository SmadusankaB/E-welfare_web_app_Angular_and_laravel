import { Component, OnInit, Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { EditPostService } from './services/edit-post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  postEditForm: FormGroup;
  facultyNameErrorMsg: 'Enter your post';
  postId: number;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editFacultyService: EditPostService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // get post id from row object
    this.postId = this.data.id;

    // Creare the form
    this.createPostEditForm();

    // Add curren values to form
    this.postEditForm.patchValue(this.data);
  }

  createPostEditForm() {

    this.postEditForm = this.formBuilder.group({
      id: ['', ''],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', '']
    });
  }

  onSubmit(value, valid) {

    if (this.postEditForm.valid) {
      this.editFacultyService.editPost(
        this.postEditForm.value, this.postId
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
