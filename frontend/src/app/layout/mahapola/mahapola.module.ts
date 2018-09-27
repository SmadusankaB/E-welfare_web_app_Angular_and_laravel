import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MahapolaRoutingModule } from './mahapola-routing.module';
import { MahapolaComponent } from './mahapola.component';


@NgModule({
  imports: [
    CommonModule,
    MahapolaRoutingModule
  ],
  declarations: [MahapolaComponent]
})
export class MahapolaModule { }
