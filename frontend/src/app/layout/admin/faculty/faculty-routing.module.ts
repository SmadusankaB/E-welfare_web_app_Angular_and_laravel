import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty.component';

const routes: Routes = [
  {
    path: '', component: FacultyComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
