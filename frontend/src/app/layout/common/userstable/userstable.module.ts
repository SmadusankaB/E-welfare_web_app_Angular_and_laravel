import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { UserstableRoutingModule } from './userstable-routing.module';
import { UserstableComponent } from './userstable.component';
import { EditComponent } from './edit/edit.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersService, InfiniteScrollerDirective, ChangeOptionService } from '../../../shared';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FacultyService } from '../../../shared/services/faculty/faculty.service';
import { ScholarshipService } from '../../../shared/services/sholarship/scholarship.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MoveComponent } from './move/move.component';
import { MoveService } from './move/services/move.service';



@NgModule({
  imports: [
    CommonModule,
    UserstableRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    Ng2Charts
  ],
  declarations: [
    UserstableComponent,
    EditComponent,
    InfiniteScrollerDirective,
    AdvancedSearchComponent,
    FileUploadComponent,
    MoveComponent,
  ],
  entryComponents: [
    EditComponent,
    AdvancedSearchComponent,
    FileUploadComponent,
    MoveComponent
  ],
  providers: [
    UsersService,
    FacultyService,
    ScholarshipService,
    ChangeOptionService,
    MoveService
  ]
})
export class UserstableModule { }
