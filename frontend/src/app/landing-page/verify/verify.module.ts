//Local modules from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyRoutingModule } from './verify-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
//local service
import { VerifyService } from '../../shared'; 
//local Componets
import { VerifyComponent } from './verify.component';
import { MaterialModule } from '../../material.module';
 

@NgModule({
    imports: [
     CommonModule, 
     VerifyRoutingModule,
     ReactiveFormsModule,
     NgProgressModule,
     MaterialModule
    ],
    declarations: [
    VerifyComponent
    ],
    providers: [
    VerifyService
    ]
})
export class VerifyModule { }
