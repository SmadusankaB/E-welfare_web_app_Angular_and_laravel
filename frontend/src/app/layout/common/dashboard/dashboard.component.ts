import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { AuthService } from '../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  constructor(
       public authService: AuthService
     ) { }

  ngOnInit() {}

}
