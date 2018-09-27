import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipComponent } from './scholarship.component';

const routes: Routes = [{
  path: '', component: ScholarshipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScholarshipRoutingModule { }
