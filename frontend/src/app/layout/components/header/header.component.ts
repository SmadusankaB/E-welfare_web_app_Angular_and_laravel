//Local things from angular
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//Global services
import {
  UserService,
  User,
  LogoutService
} from '../../../shared';
//Local components
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  errorMessage: string;
  user: User[] = [];

  constructor(
    public router: Router,
    private translate: TranslateService,
    private userService: UserService,
    private logoutService: LogoutService
  ) {

    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {

    this.userService.getUser().subscribe((user: User[]) => {
      this.user = user;
    },
      error => this.errorMessage = <any>error);
  }


  onLoggedout() {

    this.logoutService.logout();


  }


  isToggled(): boolean {

    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);

  }


  toggleSidebar() {

    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }


  rltAndLtr() {

    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');

  }


  changeLang(language: string) {

    this.translate.use(language);
  }
}
