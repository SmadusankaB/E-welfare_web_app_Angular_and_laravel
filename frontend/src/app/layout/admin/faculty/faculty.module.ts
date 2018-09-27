import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { FacultyRoutingModule } from './faculty-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { FacultyComponent } from './faculty.component';
import { EditComponent } from './edit/edit.component';

import { FacultyService } from './../../../shared/services/faculty/faculty.service';
import { AddFacultyService } from './add/services/add-faculty.service';
import { EditFacultyService } from './edit/services/edit-faculty.service';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FacultyComponent,
    AddComponent,
    EditComponent],

  entryComponents: [
      AddComponent,
      EditComponent
  ],
  providers: [
    FacultyService,
    AddFacultyService,
    EditFacultyService
   ]
})
export class FacultyModule { }
