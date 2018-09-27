import { Component, OnInit, Inject } from '@angular/core';
import { BursaryRequestApproveService } from './serivce/bursary-request-approve.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobaldataService } from '../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  apiRoot: string;
  BursaryApproveForm: FormGroup;

  options: string[] = ['Approve', 'Allow apply again'];
  // firstName: string;
  // lastName: string;
  // distance: string;
  address: string;
  phoneNo: string;
  studentNo: string;
  approvalImage: string;

  scholarshipStatus = false;
  applyAgainStatus = false;


  constructor(
    private bursaryRequestApprovalService: BursaryRequestApproveService,
    public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private glbalDatService: GlobaldataService,
    private formBuilder: FormBuilder,

  ) {
    this.apiRoot = this.glbalDatService.shareObj['apiRoot'];
  }

  ngOnInit() {
    // this.firstName = this.data.first_name  ;
    // this.lastName = this.data.last_name ;
    // this.distance = this.data.distance  ;
    this.address = this.data.address;
    this.phoneNo = this.data.phone_no;
    this.studentNo = this.data.student_no;
    this.approvalImage = `${this.apiRoot}/${this.data.saved_path}`;
    this.applyAgainStatus = this.data.apply_again_status;
    this.scholarshipStatus = this.data.scholership_status;

    this.createForm();

    // console.log(this.approvalImage);


  }

  // create form
  createForm() {
    // console.log(this.data);
    this.BursaryApproveForm = this.formBuilder.group({

      // apply_again_status: ['', ''],
      // scholership_status: ['', '']
      option: ['', '']
    });
  }

  onSubmit(value, valid) {

    // console.log(this.BursaryApproveForm.value);


    if (this.BursaryApproveForm.valid) {

      this.bursaryRequestApprovalService.approveBursary(
        this.data.id,
        this.BursaryApproveForm.value
      ).subscribe(
        (success) => {

        },
        (error) => {

        }
      );

    }
  }

  cancel() {
    this.dialogRef.close();
  }


}
