import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTableRoutingModule } from './test-table-routing.module';
import { TestTableComponent } from './test-table.component';
import { TestTableService } from './test-table.service';

import { MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    TestTableRoutingModule,
    MatButtonModule
    
  ],
  declarations: [
  	TestTableComponent
  ],
  providers:[
  TestTableService
  ]
})
export class TestTableModule { }
