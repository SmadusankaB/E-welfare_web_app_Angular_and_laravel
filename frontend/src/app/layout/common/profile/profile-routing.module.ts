import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [

      { path: '', redirectTo: 'details' },
      // { path: 'details', loadChildren: './profile-details/profile-details.module#ProfileDetailsModule' },
      // { path: 'edit', loadChildren: './profile-edit/profile-edit.module#ProfileEditModule' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
