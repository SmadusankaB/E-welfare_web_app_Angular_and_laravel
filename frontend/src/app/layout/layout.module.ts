// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';

// local Components
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { MahapolaSidebarComponent } from './components/mahapola-sidebar/mahapola-sidebar.component';
import { BursarySidebarComponent } from './components/bursary-sidebar/bursary-sidebar.component';
import { StudentSidebarComponent } from './components/student-sidebar/student-sidebar.component';
// local guards

import { MatButtonModule } from '@angular/material';

import {

    SuperadminGuard,
    MahapolaadminGuard,
    BursaryadminGuard,
    GeneraluserGuard,
    AlladminsGuard} from '../shared';




@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        MatButtonModule,
    NgbDropdownModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        AdminSidebarComponent,
        MahapolaSidebarComponent,
        BursarySidebarComponent,
        StudentSidebarComponent,


    ],
    providers: [
        SuperadminGuard,
        MahapolaadminGuard,
        BursaryadminGuard,
        GeneraluserGuard,
        AlladminsGuard
    ]
})
export class LayoutModule {}
