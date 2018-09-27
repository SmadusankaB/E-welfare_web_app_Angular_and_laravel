import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService } from './services/alert.service';
import {trigger, state, style, transition, animate} from '@angular/animations';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
  	trigger('dialog', [
	    transition('void => *', [
	      style({ transform: 'scale3d(.3, .3, .3)' }), 
	      animate(100)
	    ]),
	    transition('* => void', [
	      animate(100,  style({ transform: 'scale3d(.0, .0, .0)' }))
	    ])
    ])
  ]
})
export class AlertComponent implements OnInit {

	modalStatus: boolean;
	time: number;
	type: string
	color: string;
	backColor: string;
	title: string;
	body : string;

  constructor(
  	private _ngZone: NgZone,
  	private alertService: AlertService,
  	) { }

  ngOnInit() {
  	this.alertService.alterSettings$.subscribe(
  		(data) => {
  			this.modalStatus = true;
  			this.type = data.type; 
  			this.time = data.time;
  			this.title = data.title;
  			this.body = data.body;

  			if(this.type == "danger"){
  				this.backColor = "#dc3545";
  			}
  			if(this.type == "infor"){
  				this.backColor = "#117a8b";
  			}
  			if(this.type == "success"){
  				this.backColor = "#28a745";
  			}

  			//close alert automaticaly after specfic time 
  			this._ngZone.runOutsideAngular(() =>
        		setTimeout(() =>
            		this._ngZone.run(() =>
              			this.modalStatus = false
            	), this.time)
      		);
  		});
  }

  resolve(){
  	this.modalStatus = false;
  }

}
