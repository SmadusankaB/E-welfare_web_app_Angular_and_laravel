import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MahapolaSidebarRoutingModule } from './mahapola-sidebar-routing.module';
import { MahapolaSidebarComponent } from './mahapola-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MahapolaSidebarRoutingModule
  ],
  declarations: [MahapolaSidebarComponent]
})
export class MahapolaSidebarModule { }
