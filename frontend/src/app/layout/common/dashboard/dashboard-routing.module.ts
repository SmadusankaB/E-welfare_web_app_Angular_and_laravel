import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolverService } from './services/counts/dashboard-resolver.service';
import { FacultyResolverService } from '../../../shared';
import { MonthsResolverService } from './services/months/months-resolver.service';
import { UserDashboardResolverService } from './services/user-dashboard/user-dashboard-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      dashboardResponse: DashboardResolverService,
      facultyResolver: FacultyResolverService,
      monthsResolver: MonthsResolverService,
      userDashboardResolver: UserDashboardResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
