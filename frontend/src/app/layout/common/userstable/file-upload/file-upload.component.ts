import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { routerTransition } from '../../../../router.animations';
import { AlertService, } from '../../../../shared/modules/alert/services/alert.service';
import { UsersService } from '../../../../shared';
import { LoaderService } from '../../../../shared/modules/loader/services/loader.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  panelOpenState:  false;

  constructor(
    public dialogRef: MatDialogRef<FileUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertService: AlertService,
    private usersService: UsersService,
    private loaderService: LoaderService
    ) { }

  ngOnInit() {
  }

  // update anual list
  uploadFile(event) {
      // console.log(formData);
    const elem = event.target;
    // check user select a file

    if (elem.files.length > 0) {
      // console.log('in picture compinent '+elem.files[0]);

      // if a file is selected, then modall will be cloased
      this.dialogRef.close(0);
      const formData = new FormData();

      formData.append('csvfile', elem.files[0]);

      this.loaderService.showLoader();
      this.usersService.store(formData).subscribe(
        success => {
          this.loaderService.hideLoader();
            this.alertService.create(
            5000,
            'success',
            'Success',
            success['complete']);

        },
        // handle error
        error => {
          this.loaderService.hideLoader();
            this.alertService.create(
            10000,
            'danger',
            'Error',
            error.error.fail);
        });

      // reset file input element
      elem.value = '';

    }
  }

  close() {
    this.dialogRef.close(0);
  }

}
