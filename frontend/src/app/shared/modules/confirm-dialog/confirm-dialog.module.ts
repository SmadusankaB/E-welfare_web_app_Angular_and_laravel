import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmdialogService } from './services/confirmdialog.service';


@NgModule({
  imports: 		[CommonModule,],
  declarations: [ConfirmDialogComponent],
  exports:		[ConfirmDialogComponent], 
  providers:	[ConfirmdialogService]
})
export class ConfirmDialogModule { }
