import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSidebarRoutingModule } from './admin-sidebar-routing.module';
import { AdminSidebarComponent } from './admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminSidebarRoutingModule
  ],
  declarations: [AdminSidebarComponent]
})
export class AdminSidebarModule { }
