// things from angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// local components
import { LayoutComponent } from './layout.component';
// global services
import {
  AuthGuard,
  SuperadminGuard,
  MahapolaadminGuard,
  BursaryadminGuard,
  GeneraluserGuard,
  AlladminsGuard
} from '.././shared'; // check user is super admin or admin
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      /*{ path: 'bursary', loadChildren: './bursary/bursary.module#BursaryModule' , canActivate: [AdminGuard] },
      { path: 'mahapola', loadChildren: './mahapola/mahapola.module#MahapolaModule' , canActivate: [  SuperadminGuard] },
      */
      /* { path: 'profile', redirectTo: 'details' },*/
      {
        path: 'profile', loadChildren: './common/profile/profile.module#ProfileModule',
        canActivate: [
          AuthGuard,
        ]
      },
      {
        path: 'dashboard', loadChildren: './common/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'useraccounts', loadChildren: './common/userstable/userstable.module#UserstableModule',
        canActivate: [
          AuthGuard,
          AlladminsGuard
        ]
      },
      {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule',
        canActivate: [
          SuperadminGuard
        ]
      },
      {
        path: 'user', loadChildren: './user/user.module#UserModule',
        canActivate: [
          AuthGuard
        ]
      },

      {
        path: 'test', loadChildren: './common/test-table/test-table.module#TestTableModule'
      },
      {
        path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'
      },



      // default
      /*{ path: '', redirectTo: 'dashboard' },*/
      { path: 'dashboard2', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'forms', loadChildren: './form/form.module#FormModule' },
      { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
      { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
      { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
      { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
