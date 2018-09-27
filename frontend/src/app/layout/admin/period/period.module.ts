import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { PeriodRoutingModule } from './period-routing.module';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';

import { PeriodComponent } from './period.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { PeriodService } from './services/period.service';
import { AddService } from './add/services/add.service';
import { EditService } from './edit/services/edit.service';

@NgModule({
  imports: [
    CommonModule,
    PeriodRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PeriodComponent,
     AddComponent,
      EditComponent
  ],
  entryComponents: [
    AddComponent,
    EditComponent
  ],
  providers: [
    PeriodService,
    AddService,
    EditService
   ]
})
export class PeriodModule { }
