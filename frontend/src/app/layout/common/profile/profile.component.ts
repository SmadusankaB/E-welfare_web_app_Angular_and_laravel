import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { AuthService, UserService, User } from '../../../shared';
import { LoaderService } from '../../../shared/modules/loader/services/loader.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  errorMessage: string;

    firstName:  any;
    lastName:  any;
    email:  any;
    studentNo:  any;
    faculty: any;
    profileSummary: any;

  constructor(public as: AuthService,
    private userService: UserService,
    private loaderService: LoaderService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.getDetails();

  }

  getDetails() {
    // this.loaderService.showLoader();
    this.userService.getUser().subscribe(
      (user: User[]) => {
     // this.loaderService.hideLoader();
      this.firstName =  user['first_name'] ;
      this.lastName = user['last_name'];
      this.email = user['email'];
      this.studentNo = user['student_no'];
      this.faculty = user['faculty_name'];
      this.profileSummary = user['profile_summary'];
    },
      error => this.errorMessage = <any>error
    );
  }



  openEditDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( ProfileEditComponent, {
        width: '65%',
        height: '80%',
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getDetails();
      }
       });
  }
}
