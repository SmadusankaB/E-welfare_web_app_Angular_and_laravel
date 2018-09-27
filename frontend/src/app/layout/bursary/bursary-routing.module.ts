//things from angula
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//local components
import { BursaryComponent } from './bursary.component';
/*const routes: Routes = [
    {
        path: '', component: BursaryComponent
    }
];*/

const routes: Routes = [
    /*{
        path: '', component: BursaryComponent,
        children: [
           { path: '', redirectTo: 'bursaryprofile'},
           { path: 'bursaryprofile', loadChildren: './profile/profile.module#ProfileModule' },
            
        ]
    }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BursaryRoutingModule { }
