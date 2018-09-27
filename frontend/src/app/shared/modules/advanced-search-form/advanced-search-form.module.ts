import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedSearchFormComponent } from './advanced-search-form.component';
import { AdvancedSearchFormService } from './services/advanced-search-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AdvancedSearchFormComponent],
  exports: [AdvancedSearchFormComponent],
  providers: [AdvancedSearchFormService]
})
export class AdvancedSearchFormModule { }
