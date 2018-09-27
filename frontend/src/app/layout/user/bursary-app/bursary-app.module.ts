import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BursaryAppRoutingModule } from './bursary-app-routing.module';
import { BursaryAppComponent } from './bursary-app.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BursaryAppService } from './service/bursary-app.service';
import { GlobaldataService } from '../../../shared';
import { BursaryAppResolverService } from './service/bursary-app-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    BursaryAppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [BursaryAppComponent],
  providers: [
    BursaryAppService,
  GlobaldataService,
  BursaryAppResolverService
]

})
export class BursaryAppModule { }
