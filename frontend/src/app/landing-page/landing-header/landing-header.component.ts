import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }


  navigateToLogin() {

    this.router.navigate(['/login']);

  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

}
