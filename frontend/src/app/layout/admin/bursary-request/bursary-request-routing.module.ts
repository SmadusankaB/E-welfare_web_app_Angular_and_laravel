import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BursaryRequestComponent } from './bursary-request.component';

const routes: Routes = [{
  path: '',
  component: BursaryRequestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BursaryRequestRoutingModule { }
