import { Component, OnInit, Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { AddPostService } from './services/add-post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  errorMessage: string;
  addPostForm: FormGroup;
  userId: string;

  public options: Object = {
    placeholderText: 'Edit description here!',
    charCounterCount: false,
    height: 200 ,
  };

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cookieService: CookieService,
    private addPostService: AddPostService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,

  ) {
    this.userId = this.cookieService.get('id');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', '']
    });
  }

  onSubmit(value, valid) {
    if (this.addPostForm.valid) {

      // Assign userid into form object
      this.addPostForm.value.user_id = this.userId;

      this.addPostService.addNewPost(this.addPostForm.value).subscribe(
        (success) => {
          this.dialogRef.close(1);
          // console.log(success);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${success.title} sucessfully added.`
          );
          this.addPostForm.reset();
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
