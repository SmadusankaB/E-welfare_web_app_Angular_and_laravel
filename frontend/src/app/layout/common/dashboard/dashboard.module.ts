import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { MaterialModule } from '../../../material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule, FacultyResolverService } from '../../../shared';
import { AdminComponent } from './admin/admin.component';
import { MahapolaadminComponent } from './mahapolaadmin/mahapolaadmin.component';
import { BursaryadminComponent } from './bursaryadmin/bursaryadmin.component';
import { GeneralauserComponent } from './generalauser/generalauser.component';
import { UsersService, FacultyService } from '../../../shared';
import { DashboardService } from './services/dashboard.service';
import { DashboardResolverService } from './services/counts/dashboard-resolver.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthsResolverService } from './services/months/months-resolver.service';
import { UserDashboardResolverService } from './services/user-dashboard/user-dashboard-resolver.service';
import { UserDashboardService } from './services/user-dashboard.service';




@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    StatModule,
    Ng2Charts,
    ReactiveFormsModule
  ],
  declarations: [
  DashboardComponent,
  AdminComponent,
  MahapolaadminComponent,
  BursaryadminComponent,
  GeneralauserComponent,

  ],
  providers: [
    UsersService,
    DashboardService,
    FacultyService,
    DashboardResolverService,
    FacultyResolverService,
    MonthsResolverService,
    UserDashboardResolverService,
    UserDashboardService
  ]

})
export class DashboardModule { }
