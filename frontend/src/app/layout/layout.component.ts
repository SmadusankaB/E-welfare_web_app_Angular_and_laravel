import { Component, OnInit } from '@angular/core';
//Global service
import { AuthService } from '../shared';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	

	//use public beacuse i can use methods and properties of 
	//AuthService in template
    constructor(public authService:AuthService) {}

    ngOnInit() {
    }
    	
}
