// Local modules from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
// Local service
import { SignupService } from '../../shared';
// local Componets
import { SignupComponent } from './signup.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    NgProgressModule,
    MaterialModule 
   ],
  declarations: [SignupComponent],
  providers: [
  	SignupService
  ]
})
export class SignupModule { }
