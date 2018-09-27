// Local things from angular
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// Global services
import { SignupService } from '../../shared';
import { CookieService } from 'ngx-cookie-service';
import { NgProgress } from 'ngx-progressbar';

// Local components
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})


export class SignupComponent implements OnInit {


  signUpForm: FormGroup;

  studentNoErrorMeg:  'Please Enter Student Number';
  emailErrorMeg:  'Please Enter Email';
  passwordErrorMeg = 'Please Enter Password with 8 Characers';
  rePasswordErrorMeg: 'Please Re-enter Password';

  successMessage: any;
  errorMessage: string[] = [];

   constructor(
    private router: Router,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private ngProgressBar: NgProgress,
    private formBuilder: FormBuilder,
    private signUpService: SignupService
    ) {

   }

   ngOnInit() {
    this.createSignUpForm();
   }

   createSignUpForm() {
     this.signUpForm = this.formBuilder.group({
       student_no: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
       confirm_password: ['', [Validators.required, Validators.minLength(8)]]
     });
   }

  onSubmit() {
      this.ngProgressBar.start();
      // clear array
      this.errorMessage = [];
      if ( this.signUpForm.valid ) {
        this.signUpService.signUp(this.signUpForm.value)
        .subscribe(
          success => {
            this.successMessage = success;

            this.cookieService.delete('id');
            this.cookieService.set('id', this.successMessage.complete.id);

            this.router.navigate(['/verify']);
            this.ngProgressBar.done();
          },
          error => {
            if (error.error.fail['student_no']) {
              this.errorMessage.push(error.error.fail['student_no'][0]);
            }
            if (error.error.fail['password']) {
              this.errorMessage.push(error.error.fail['password'][0]);
            }
            if (error.error.fail['confirm_password']) {
              this.errorMessage.push(error.error.fail['confirm_password'][0]);
            }
            if (error.error.fail['email']) {
              this.errorMessage.push(error.error.fail['email'][0]);
            }

            this.ngProgressBar.done();
          });
      }
  }
}
