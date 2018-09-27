import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessDeniedRoutingModule } from './access-denied-routing.module';
import { AccessDeniedComponent } from './access-denied.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    AccessDeniedRoutingModule,
    MaterialModule
  ],
  declarations: [AccessDeniedComponent]
})
export class AccessDeniedModule { }
