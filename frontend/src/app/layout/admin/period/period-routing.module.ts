import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodComponent } from './period.component';

const routes: Routes = [
  {
    path: '', component: PeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
