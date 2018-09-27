import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingBackgroundComponent } from './landing-background.component';

const routes: Routes = [
  {
    path: '',
    component: LandingBackgroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingBackgroundRoutingModule { }
