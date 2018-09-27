import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '',
    component: UserComponent,
    children: [
      {
        path: 'bursary-app', loadChildren: './bursary-app/bursary-app.module#BursaryAppModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
