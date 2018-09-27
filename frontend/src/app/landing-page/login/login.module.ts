// Local modules from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { NgProgressModule } from 'ngx-progressbar';
import { ReactiveFormsModule } from '@angular/forms';
// Local service
import { LoginService } from '../../shared';
// local Componets
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../material.module';


@NgModule({
   imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgProgressModule,
    MaterialModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {}
