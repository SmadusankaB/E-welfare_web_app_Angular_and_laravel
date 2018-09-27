import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangesRoutingModule } from './changes-routing.module';
import { ChangesComponent } from './changes.component';
import { ChangesService } from './services/changes.service';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChangesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ChangesComponent],
  providers: [
    ChangesService
  ]
})
export class ChangesModule { }
