// Local things from angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// Global services
import { CookieService } from 'ngx-cookie-service';
import { AuthService, GlobaldataService, LoginService } from '../../shared';
import { LoaderService } from '../../shared/modules/loader/services/loader.service';
import { AlertService } from '../../shared/modules/alert/services/alert.service';

// Local components
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    cookieValue = 'UNKNOWN';
    logInForm: FormGroup;

    studentNoErrorMeg: 'Please Enter Student Number';
    passwordErrorMsg: 'Please Enter Password';
    backendErrorMsg: '';


    public isCollapsed = false;

    constructor(
      private router: Router,
      private httpClient: HttpClient,
      private cookieService: CookieService,
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private loaderService: LoaderService,
      private alertService: AlertService
    ) {

      }

    ngOnInit() {


      this.createLoginForm();

    }


    private createLoginForm() {
      this.logInForm = this.formBuilder.group({
        student_no: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }

    onSubmit(value, valid) {
      this.loaderService.showLoader();

      if (this.logInForm.valid) {

        this.loginService.logIn(this.logInForm.value).
        subscribe(
          success => {

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

          this.loaderService.hideLoader();

        },
        error => {
          this.loaderService.hideLoader();

          this.backendErrorMsg = error.error.fail;
          this.alertService.create(
            2000,
            'danger',
            'Error',
            this.backendErrorMsg);
        });

      }
    }

    showForm() {
      console.log('hi');
    }
}


