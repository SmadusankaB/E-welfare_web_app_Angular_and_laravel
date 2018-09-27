import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', loadChildren: './landing-background/landing-background.module#LandingBackgroundModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
      { path: 'verify', loadChildren: './verify/verify.module#VerifyModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
