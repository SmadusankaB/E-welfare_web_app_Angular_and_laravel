import { Component, OnInit, Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { EditRoleService } from './services/edit-role.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  roleEditForm: FormGroup;
  roleId: number;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editRoleService: EditRoleService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // get post id from row object
    this.roleId = this.data.id;

    // Creare the form
    this.createRoleEditForm();

    // Add curren values to form
    this.roleEditForm.patchValue(this.data);
  }

  createRoleEditForm() {

    this.roleEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', '']
    });
  }

  onSubmit(value, valid) {

    if (this.roleEditForm.valid) {
      this.editRoleService.updateRole(
        this.roleEditForm.value, this.roleId
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
