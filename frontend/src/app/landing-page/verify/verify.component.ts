// Local things from angular
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { NgProgress } from 'ngx-progressbar';
// Global services
import { AuthService, VerifyService } from '../../shared';
import { CookieService } from 'ngx-cookie-service';
// Local components
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  animations: [routerTransition()]
})
export class VerifyComponent implements OnInit {

  verifyForm: FormGroup;
  successMessage: any;
  errorMessage: string;

  panelOpenState = false;

  codeErrorMeg: string = 'Enter 4 digit code here.';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private authService: AuthService,
    private ngPrograssBar: NgProgress,
    private verifyService: VerifyService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.createVerifyForm();
  }

  createVerifyForm() {
    this.verifyForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(value, valid) {
    this.ngPrograssBar.start();
    if (this.verifyForm.value) {
      this.verifyService.doVerify(this.verifyForm.value).subscribe(
        success => {

          this.successMessage = success;

          this.cookieService.delete('token');
          this.cookieService.delete('role');
          this.cookieService.delete('id');

          this.cookieService.set('token', success.complete['token']);
          this.cookieService.set('id', success.complete['id']);
          this.cookieService.set('role', success.complete['role']);

          this.authService.checkIsSuperAdmin();
          this.authService.checkIsMahapolaAdmin();
          this.authService.checkIsBursaryAdmin();
          this.authService.checkIsGeneral();

          this.authService.userNavigate();

          this.ngPrograssBar.done();
        },
        error => {

          this.errorMessage = error.error.fail;
          this.ngPrograssBar.done();
        }

      );
    }













    /*if (this.verifyForm.valid) {
     this.ngPrograssBar.start();
    let url = `${this.apiRoot}/api/verify/`+this.id;

    this.httpClient.post(
      url,
      this.verifyForm.value,
      ).subscribe(
        success=>{

         this.backend_data = success;


          if(this.backend_data['error']){
            this.backend_errors = this.backend_data['error'];

          }else{

            this.cookieService.deleteAll();

            this.cookieService.set( 'token', this.backend_data.user['token']);
            this.cookieService.set('id', this.backend_data.user['id']);
            this.cookieService.set( 'role', this.backend_data.user['role']);

            this.authService.checkIsSuperAdmin();
            this.authService.checkIsAdmin();

            //Navigate user according to user type
            this.authService.userNavigate();
            this.ngPrograssBar.done();
          }

        },
        fails=>{
          alert('no ok')
          //this.backend_errors = fails.json();
          //alert(this.backend_errors['student_no']);
        });
  }*/
  }


}
