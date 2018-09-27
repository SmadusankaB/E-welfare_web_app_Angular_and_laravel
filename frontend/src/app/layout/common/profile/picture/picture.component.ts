// From angular
import { Component, OnInit } from '@angular/core';
/*import { Http, Headers} from '@angular/http'; */
import { HttpClient } from '@angular/common/http';
// Shared services
import { GlobaldataService } from '../../../../shared';
import { CookieService } from 'ngx-cookie-service';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { LoaderService } from '../../../../shared/modules/loader/services/loader.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']

})
export class PictureComponent implements OnInit {

  apiRoot = '';
  apiToken = '';
  profileImage: string;
  upDate: string;
  upTime: string;
  userId: string;

  constructor(
    private globalData: GlobaldataService,
    private cookieService: CookieService,
    private httpClient: HttpClient,
    private alertService: AlertService,
    private loaderService: LoaderService
  ) {
    this.apiRoot = this.globalData.shareObj['apiRoot'];
    this.apiToken = this.cookieService.get('welfare_token');
    this.userId = this.cookieService.get('id');
  }



  ngOnInit() {

    const getUrl = `${this.apiRoot}/api/image`;

    // get profile picture when loading
    this.httpClient.get(
      getUrl
    ).subscribe(
      success => {

        this.getProfilePicture(success);

      },
      error => {
        console.log('fails');
      }
    );
  }

  // update profile picture
  uploadFile(event) {
    this.loaderService.showLoader();
    // get element. here input type file
    const elem = event.target;
    // check user select a file
    if (elem.files.length > 0) {
      console.log('in picture compinent ' + elem.files[0]);

      const formData = new FormData();
      formData.append('image', elem.files[0]);
      formData.append('user_id', this.userId);

      const postUrl = `${this.apiRoot}/api/image`;

      // send file to backend
      this.httpClient.post(
        postUrl,
        formData
      ).subscribe(
        success => {

          // response contains backend saved path
          const response = success;

          // call getprofilepicutre method with response
          this.getProfilePicture(response);
          this.loaderService.hideLoader();
          this.alertService.create(
            2000,
            'success',
            'Success',
            'Profile picture Successfully Updated...');
        },

        error => {
          this.loaderService.hideLoader();
          console.log('Error', error);
        });
    }

  }

  // set profile picture
  getProfilePicture(res: any) {

    if (res[0] == null) {
      // set default profile picture
      this.profileImage = 'assets/images/user2-160x160.png';

    } else {

      // set updated profile picture
      this.profileImage = this.apiRoot + '/' + res[0].saved_path;
      this.upDate = res[0].uploaded_date;
      this.upTime = res[0].uploaded_time;
    }

  }


}
