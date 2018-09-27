import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { PostRoutingModule } from './post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import { FroalaEditorModule, /*FroalaViewModule*/ } from 'angular-froala-wysiwyg';

import { PostComponent } from './post.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { PostService } from './services/post.service';
import { AddPostService } from './add/services/add-post.service';
import { EditPostService } from './edit/services/edit-post.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FroalaEditorModule.forRoot(),
    PostRoutingModule,
  ],
  declarations: [
    PostComponent,
    AddComponent,
    EditComponent
  ],

  entryComponents: [
    AddComponent,
    EditComponent
  ],
    providers: [
      AddPostService,
      EditPostService,
      PostService
    ]
})
export class PostModule { }
