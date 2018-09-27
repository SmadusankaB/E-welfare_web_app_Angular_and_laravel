import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BursaryRequestRoutingModule } from './bursary-request-routing.module';
import { BursaryRequestComponent } from './bursary-request.component';
import { BursaryRequestService } from './service/bursary-request.service';
import { MaterialModule } from '../../../material.module';
import { ViewComponent } from './view/view.component';
import { BursaryRequestApproveService } from './view/serivce/bursary-request-approve.service';
import { GlobaldataService } from '../../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BursaryRequestRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [BursaryRequestComponent, ViewComponent],
  entryComponents: [ViewComponent],

  providers: [
    BursaryRequestService,
    BursaryRequestApproveService,
    GlobaldataService
  ]
})
export class BursaryRequestModule { }
