import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerHeight;
    console.log(this.innerWidth);
  }

}
