import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BursaryRoutingModule } from './bursary-routing.module';
import { BursaryComponent } from './bursary.component';
import { PageHeaderModule } from './../../shared';



@NgModule({
  imports: [
    CommonModule,
    BursaryRoutingModule,

    PageHeaderModule
  ],
  declarations: [
  	BursaryComponent, 
  	
  ]
})
export class BursaryModule { }
