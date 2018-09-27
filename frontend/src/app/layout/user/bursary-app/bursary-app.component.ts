import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BursaryAppService } from './service/bursary-app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobaldataService } from '../../../shared';
import { BursaryAppResolverService } from './service/bursary-app-resolver.service';


@Component({
  selector: 'app-bursary-app',
  templateUrl: './bursary-app.component.html',
  styleUrls: ['./bursary-app.component.scss']
})
export class BursaryAppComponent implements OnInit {

  bursaryForm: FormGroup;
  profileImage: string;

  apiRoot: string;

  showImageUpload: boolean = false;  // to show image upload part
  applyAgainStatus: boolean = false; // show application
  scholarshipStatus: boolean = true;  //


  constructor(
    private fromBuilder: FormBuilder,
    private bursaryAppService: BursaryAppService,
    private globalDataService: GlobaldataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.apiRoot = this.globalDataService.shareObj['apiRoot'];
    this.makeForm();
    this.getFormData();

  }

  ngOnInit() {

  }

  getFormData(): any {
    const result = this.route.snapshot.data['bursaryAppResolver'];

    // console.log(this.applyAgainStatus);
    console.log(result.complete[0].scholership_id);
    console.log(result.complete[0].apply_again_status);

    this.applyAgainStatus = result.complete[0].apply_again_status;
    const scholId = result.complete[0].scholership_id;
    // const scholId = null;
    // this.applyAgainStatus = false;
    // if (scholId != null ) {
    //   this.scholarshipStatus = false;
    // }
    this.scholarshipStatus = result.complete[0].scholership_status;

    this.bursaryForm.patchValue(result.complete[0]);
    this.getIncomeImage(result.complete[0].saved_path);

  }

  makeForm(): any {

    this.bursaryForm = this.fromBuilder.group({

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      distance: ['', Validators.required],
      address: ['', Validators.required],
      phone_no: ['', Validators.required]
    });

  }

  // updated user
  onSubmit(value, valid) {
    // this.loaderService.showLoader();
    if (this.bursaryForm.valid) {
      console.log(this.bursaryForm.value);
      this.bursaryAppService.saveFormData(this.bursaryForm.value).subscribe((response: boolean) => {
        // this.editResponse = response;
        console.log(response);

        this.showImageUpload = response;


      });
    }
  }

  // update profile picture
  uploadFile(event) {
    // get element. here input type file
    const elem = event.target;
    // check user select a file
    if (elem.files.length > 0) {
      // console.log('in picture compinent ' + elem.files[0]);

      const formData = new FormData();
      formData.append('image', elem.files[0]);

      this.bursaryAppService.saveImageData(formData).subscribe(
        (success) => {
          console.log(success);
          if (success != null) {
            //// get appliy again status from database, it should be zero
            this.applyAgainStatus = false;
          }
        }
      );

    }
  }

  getIncomeImage(path: string) {

    if (path == null) {
      // set default profile picture
      this.profileImage = 'assets/images/addDetail.png';

    } else {

      // set updated profile picture
      this.profileImage = this.apiRoot + '/' + path;

    }

  }


  cancelBursaryApp() {
    this.router.navigate(['u/dashboard']);
  }

}
