// things from node module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Global components
import { AppComponent } from './app.component';
// Global service
import { AuthGuard, AuthService} from './shared'; // check user has token


const routes: Routes = [
    { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule'},
    { path: 'u', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },


    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
