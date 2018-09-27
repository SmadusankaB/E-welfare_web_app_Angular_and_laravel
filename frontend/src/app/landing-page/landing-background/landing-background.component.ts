 /**
  * This component cotains, handling post to common user
  */
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CommonPostsService } from './services/common-posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing-background',
  templateUrl: './landing-background.component.html',
  styleUrls: ['./landing-background.component.scss'],
  animations: [routerTransition()]
})
export class LandingBackgroundComponent implements OnInit {

  num : number = 1;
  totalNumberOfPosts : number = 0;

  posts: Array<any> = [];

  constructor(
    private commonPostService: CommonPostsService
  ) {}


    public ngOnInit() {
      // getfirst xnumber of posts when page load
      this.getPosts(1);
    }
     
    
    onScrollUp () {
      console.log('scrolled down!!');
    }

    onScrollDown () {

      let lastNum : number = this.num ++;

    // Avoid request same page
    if( lastNum <= this.num && lastNum <= this.totalNumberOfPosts){
      // Get rest of the posts when page loading
      this.getPosts(this.num);
    }
      
   }


   getPosts(value: number){

      this.commonPostService.getCommonPosts(value).subscribe(
        (success) => {
      
          this.posts = this.posts.concat(success.data);
          console.log(success.total);
          
          this.totalNumberOfPosts = success.total;
          //console.log(this.num);
        },
        ( error ) => {
  
        }
      );
    

   }
    

 }
