import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftsideEditFormComponent } from './leftside-edit-form.component';
import { LeftsideEditFormService } from './services/leftside-edit-form.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LeftsideEditFormComponent],
  exports:[LeftsideEditFormComponent],
  providers:[LeftsideEditFormService]
})
export class LeftsideEditFormModule { }
