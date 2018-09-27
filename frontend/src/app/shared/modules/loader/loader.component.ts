import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

	loaderVisibility : boolean = false;


  constructor(private loaderSerive: LoaderService) { }

  ngOnInit() {
  	this.loaderSerive.loaderStatus$.subscribe(
  		(status) => {
  			this.changeLoaderSatus(status);
  		});

  }

  changeLoaderSatus(status: boolean){
  	this.loaderVisibility = status;
  }

  
  
}
