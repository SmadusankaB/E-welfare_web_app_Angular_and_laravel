import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahapolaComponent } from './mahapola.component';

const routes: Routes = [
	/*{
		path:'', component:MahapolaComponent,
		children:[
			{ path : '', redirectTo : 'mahapolaprofile'},
			{ path : 'mahapolaprofile', loadChildren: './profile/profile.module#ProfileModule'},
		]
	}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahapolaRoutingModule { }
