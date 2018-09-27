import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserstableComponent } from './userstable.component';

const routes: Routes = [
		{path:'', component: UserstableComponent}
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserstableRoutingModule { }
