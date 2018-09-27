import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { LandingBackgroundRoutingModule } from './landing-background-routing.module';
import { LandingBackgroundComponent } from './landing-background.component';
import { CommonPostsService } from './services/common-posts.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    LandingBackgroundRoutingModule,
    MaterialModule,
    InfiniteScrollModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot()
  ],
  declarations: [
    LandingBackgroundComponent,
  
    ],
  providers:[
    CommonPostsService
  ]
})
export class LandingBackgroundModule { }
