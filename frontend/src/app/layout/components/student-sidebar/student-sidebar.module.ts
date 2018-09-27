import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSidebarRoutingModule } from './student-sidebar-routing.module';
import { StudentSidebarComponent } from './student-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    StudentSidebarRoutingModule
  ],
  declarations: [StudentSidebarComponent]
})
export class StudentSidebarModule { }
