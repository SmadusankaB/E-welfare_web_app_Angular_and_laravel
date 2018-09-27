import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {
        path: 'role', loadChildren: './role/role.module#RoleModule',

      },
      {
        path: 'post', loadChildren: './post/post.module#PostModule'
      },
      {
        path: 'faculty', loadChildren: './faculty/faculty.module#FacultyModule'
      },
      {
        path: 'scholarship', loadChildren: './scholarship/scholarship.module#ScholarshipModule'
      },
      {
        path: 'period', loadChildren: './period/period.module#PeriodModule'
      },
      {
        path: 'changes', loadChildren: './changes/changes.module#ChangesModule'
      },
      {
        path: 'installments', loadChildren: './installment/installment.module#InstallmentModule'
      },
      {
        path: 'bursaryrequests', loadChildren: './bursary-request/bursary-request.module#BursaryRequestModule'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
