import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { MaterialModule } from '../material.module';



@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MaterialModule,
  ],
  declarations: [
  LandingPageComponent,
  LandingHeaderComponent,
  
  ]
})
export class LandingPageModule { }
