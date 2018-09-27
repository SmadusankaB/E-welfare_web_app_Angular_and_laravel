import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { ScholarshipRoutingModule } from './scholarship-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { ScholarshipComponent } from './scholarship.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { ScholarshipService } from './../../../shared/services/sholarship/scholarship.service';
import { AddService } from './add/services/add.service';
import { EditService } from './edit/services/edit.service';

@NgModule({
  imports: [
    CommonModule,
    ScholarshipRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ScholarshipComponent,
    AddComponent,
    EditComponent
  ],
  entryComponents: [
    AddComponent,
    EditComponent
  ],
  providers: [
    ScholarshipService,
    AddService,
    EditService
  ]
})
export class ScholarshipModule { }
