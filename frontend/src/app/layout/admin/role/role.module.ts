import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { RoleService } from './services/role.service';
import { AddRoleService } from './add/services/add-role.service';
import { EditRoleService } from './edit/services/edit-role.service';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    RoleComponent,
    AddComponent,
    EditComponent],
  entryComponents: [
    AddComponent,
    EditComponent
  ],
  providers: [
    RoleService,
    AddRoleService,
    EditRoleService
  ]
})
export class RoleModule { }
