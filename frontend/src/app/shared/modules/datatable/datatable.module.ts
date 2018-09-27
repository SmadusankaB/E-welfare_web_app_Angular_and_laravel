import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { DatatableService } from './services/datatable.service';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [ CommonModule,
  			DataTablesModule],
  declarations: [DatatableComponent],
  exports:[DatatableComponent],
  providers:[DatatableService]
})
export class DatatableModule { }
