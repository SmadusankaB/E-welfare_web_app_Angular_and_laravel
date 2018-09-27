import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BursaryAppComponent } from './bursary-app.component';
import { BursaryAppResolverService } from './service/bursary-app-resolver.service';

const routes: Routes = [{
  path: '',
  component: BursaryAppComponent,
  resolve: {
    bursaryAppResolver: BursaryAppResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BursaryAppRoutingModule { }
