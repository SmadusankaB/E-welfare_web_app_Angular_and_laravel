import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';
import { InstallmentService } from './services/installment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { FacultyService } from '../../../shared';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ScholarshipService } from '../../../shared/services/sholarship/scholarship.service';

@NgModule({
  imports: [
    CommonModule,
    InstallmentRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    InstallmentComponent,
    AdvancedSearchComponent
  ],
  entryComponents: [
    AdvancedSearchComponent
  ],
  providers: [
    InstallmentService,
    FacultyService,
    ScholarshipService
  ]
})
export class InstallmentModule { }
