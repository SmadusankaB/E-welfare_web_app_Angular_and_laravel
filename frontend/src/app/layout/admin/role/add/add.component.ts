import { Component, OnInit, Inject } from '@angular/core';
import { AddRoleService } from './services/add-role.service';
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
  addRoleForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addRoleService: AddRoleService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,

  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addRoleForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(value, valid) {
    if (this.addRoleForm.valid) {

      this.addRoleService.addNewRole(this.addRoleForm.value).subscribe(
        (success) => {

          this.dialogRef.close(1);
          this.alertService.create(
            3000,
            'success',
            'Success',
            `${success.name} successfully created.`
          );
          this.addRoleForm.reset();
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
