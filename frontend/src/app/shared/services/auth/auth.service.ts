import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  // Create a stream of
  // logged in ,
  // isSuperAdmin,
  // isAdmin,
  // user,
  // status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  isSuperAdmin: boolean;
  isMahapolaAdmin: boolean;
  isBursaryAdmin: boolean;
  isGeneral: boolean;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {

      // if user has token
    if ( this.hasToken()) {
      // Fire setLoggedIn method
      this.setLoggedIn(true);
        // Check user is admin and
        // assign user type into isAdmin variable
        // when entire html page loading.
        // Ex: refresh browser tab after once login.
        this.checkIsSuperAdmin();
        this.checkIsMahapolaAdmin();
        this.checkIsBursaryAdmin();
        this.checkIsGeneral();
    }else {// if user don't have token
      this.setLoggedIn(false);
    }
  }

  // Check the user has token
  hasToken(): boolean  {
    //  console.log(this.cookieService.get('token') == null);
    if (this.cookieService.get('token') != null) {
     console.log('token' + this.cookieService.get('token'));
     console.log('id' + this.cookieService.get('id'));
     console.log('role' + this.cookieService.get('role'));
     // if user has token, return true
      return true;
    }else {

      // if the user does not has token return false.
      return false;
    }
  }


  setLoggedIn(value: boolean) {
    this.loggedIn$.next(value); // Update login status in loggedIn$ stream
    this.loggedIn = value; // update logedin property.
  }


  // Check user is SuperAdmin
  checkIsSuperAdmin() {
    this.isSuperAdmin = this.cookieService.get('role') === 'ROLE_SUPERADMIN';

    /*alert('superadmin'+this.isSuperAdmin)*/
  }

  // Check user is Admin
  checkIsMahapolaAdmin() {
    this.isMahapolaAdmin = this.cookieService.get('role') === 'ROLE_MAHAPOLA_ADMIN';
    /*alert( 'admin'+this.isAdmin);*/
  }

  // ckeck user is Bursary Admin.
  checkIsBursaryAdmin() {
    this.isBursaryAdmin = this.cookieService.get('role') === 'ROLE_BURSARY_ADMIN';
  }

  // check user is a normal user.
  checkIsGeneral() {
    this.isGeneral = this.cookieService.get('role') === 'ROLE_GENERAL';
  }


  // if user has token, he/she redrect to dashboard.
  userNavigate() {
    /*if(this.isSuperAdmin){
      alert('you are super admin');
      this.router.navigate(['profile']);
    }else if(this.isMahapolaAdmin){
      alert('you are mahaola admin')
       this.router.navigate(['profile']);
    }else if(this.isBursaryAdmin){
      alert('you are bursary admin')
       this.router.navigate(['profile']);
    }else if (this.isGeneral) {
      alert('you are general user');
      this.router.navigate(['profile']);
    }*/

    this.router.navigate(['u/dashboard']);
  }


}
