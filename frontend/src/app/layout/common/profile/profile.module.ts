// Things from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
// Local modules
import { ProfileRoutingModule } from './profile-routing.module';
// Local components
import { ProfileComponent } from './profile.component';
import { PictureComponent } from './picture/picture.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FacultyService } from '../../../shared';
import { ChatComponent } from '../../dashboard/components';
// import { ProfileDetailsComponent } from './profile-details/profile-details.component';



@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
  ],
  declarations: [
    ProfileComponent,
    PictureComponent,
    ProfileEditComponent,
    ChatComponent
  //  ProfileDetailsComponent ,
  ],
  entryComponents: [
    ProfileEditComponent
  ],
  providers: [
    FacultyService
  ]
})
export class ProfileModule { }
