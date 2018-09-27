import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-bursary',
  templateUrl: './bursary.component.html',
  styleUrls: ['./bursary.component.scss'],
   animations: [routerTransition()]
})
export class BursaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
