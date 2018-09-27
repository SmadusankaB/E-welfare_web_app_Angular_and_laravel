import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { routerTransition } from '../../../router.animations';
import { UsersService, GlobaldataService } from '../../../shared';
// import { AdvancedSearchFormService } from '../../../shared/modules/advanced-search-form/services/advanced-search-form.service';
// import { LeftsideEditFormService } from '../../../shared/modules/leftside-edit-form/services/leftside-edit-form.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { LoaderService } from '../../../shared/modules/loader/services/loader.service';
import { MatDialog } from '@angular/material';
import { EditComponent } from './edit/edit.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MoveComponent } from './move/move.component';
import { RouteConfigLoadStart, Router } from '@angular/router';


declare const $;

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.scss'],
  animations: [
    routerTransition()
  ]
})
export class UserstableComponent implements OnInit {

  errorMessage: string;
  profileImage: 'assets/images/user2-160x160.png';

  searchOptions  = {faculty_name: 'None', entrance_year: new Date().getFullYear().toString(), scholership_name: 'None'};
  apiRoot: string;

  constructor(
    private usersService: UsersService,
    // private searchFormService: AdvancedSearchFormService,
    // private editFormService: LeftsideEditFormService,
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService,
    private globalDtService: GlobaldataService,
    private loaderSerive: LoaderService,
    public dialog: MatDialog,
    private router: Router,

  ) { }

  ngOnInit() {
    //  draw data table with default options
    this.getUsers(this.searchOptions);

  }

  // Open user advanced search modal dialofg
  openAdvancedSearchDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( AdvancedSearchComponent, {
        width: '50%',
        height: '56%'
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // result contains search form data

      }

      this.getUsers(result);

       });
  }

  // Open user edit modal dialofg
  openEditDialog(facData: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open( EditComponent, {
      width: '50%',
       data: facData
    });

    // handle data from modal.
    // In this case, success/error data will be handled
    dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            // reload datatable with default options
             this.getUsers(this.searchOptions);
          }
       });
  }

  // Open user edit modal dialofg
  fileUploadDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( FileUploadComponent, {
      width: '50%',
      //  data: facData
    });

    // handle data from modal.
    // In this case, success/error data will be handled
    dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            // reload datatable with default options
             this.getUsers(this.searchOptions);
          }
       });
  }

  // Open user sholarship change model modal dialofg
  openMoveDialog(facData: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open( MoveComponent, {
      width: '90%',
       data: facData
    });

    // // handle data from modal.
    // // In this case, success/error data will be handled
    // dialogRef.afterClosed().subscribe(result => {
    //       if (result === 1) {
    //         // reload datatable with default options
    //         this.getUsers(this.searchOptions);
    //       }
    //    });
  }

  // call post request with options and draw table
  getUsers(options: any) {

    this.loaderSerive.showLoader();
    this.usersService.getUsers(options).subscribe(
      response => {
        // console.log(response['complete'].data);
          this.setUpDataTable(response['complete']);
          this.loaderSerive.hideLoader();

      });
  }

  setUpDataTable(users: any) {

    let mainDataTable = $('#mainDataTable').DataTable( {
        serverSide: false,
        paging: true,
        lengthChange : true,
        searching : true,
        ordering : true,
        info : true,
        autoWidth : true,
        pageLength: 200,
        destroy: true,
        data: users,
         columnDefs: [ {
            targets: 0,
            data: null,
            defaultContent: `<button class="btn btn-default more-btn" style="padding:0px;"><i class="fa fa-angle-double-right"></i></button>
                            <button class="btn btn-primary edit-btn" style="padding:0px;"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger delete-btn" disabled style="padding:0px;"><i class="fa fa-remove"></i></button>
                            <button class="btn btn-default fb-btn" style="padding:0px;"><i class="fa fa-facebook"></i></button>
                            `
        } ],
        dom: 'Bfrtip',
        buttons: [
           // 'columnsToggle',
            'copy',
            'colvis',
            'csv',
            'excel',
            'pdf',
            'print',
            {
              text: 'Add user list',
              key: '1',
              action: () => {
                this.fileUploadDialog();
              }
          },
            {
                text: 'Advanced search',
                key: '2',
                action: () => {
                  this.openAdvancedSearchDialog();
                }
            }
        ],
          columns: [
                    {
                        data: null,
                        className: 'center',
                    },
                    {
                      data: 'student_no'
                    },
                    {
                      data: 'first_name',
                      // className: "hide_column",
                    },
                    {
                      data: 'last_name'
                      // className: "clickableColumn",
                    },
                    {
                      data: 'scholership_name'
                      // className: "clickableColumn",
                    },
                    {
                      data: 'email'
                    },
                    {
                      data: 'entrance_year'
                    },
                    {
                      data: 'faculty_name'
                    },
                    {
                      data: 'is_activated'
                    },
                    {
                      data: 'scholership_status'
                    }
          ],
          rowCallback: (row: Node, data: any, index: number) => {
            const self = this;
            $('.edit-btn', row).unbind('click');
            $('.edit-btn', row).bind('click', () => {
             this.openEditDialog(data);
            });

            $('.delete-btn', row).unbind('click');
            $('.delete-btn', row).bind('click', () => {
                // display confimation messgae
                this.confDialogService.create(
                  'Confirmation!',
                  'Do you want to completly delete this user?',
                  '#c82333',
                  '#fff').subscribe(
                  (confirmation) => {
                    // if confimation is true
                    if (confirmation.resolved) {
                      // call users service to delete user
                      this.deleteSelectedUser(data.id, row);
                    }
                  });
             });
            $('.more-btn', row).unbind('click');
            $('.more-btn', row).bind('click', () => {
               this.openMoveDialog(data);
              // this.userId = data.id;
              // console.log(data.id);
              // this.router.navigate(['u/admin/installments']);
             //  this.router.


             });
            $('.fb-btn', row).unbind('click');
            $('.fb-btn', row).bind('click', () => {
              const link = 'https://www.facebook.com/public/' + data.first_name +'-'+data.last_name;
              window.open(link);
             });
            return row;
          }
     });
  }

  // delete user
  deleteSelectedUser(id: number, row: any){
    // delete use in database.
    this.loaderSerive.showLoader();
    this.usersService.deleteUser(id).subscribe(
      success => {
        // display success alert after deleting the user
        this.loaderSerive.hideLoader();

          this.alertService.create(
            3000,
            'success',
            'Deleted...',
            'The record has been successfully deleted.'
          );
        // remove deleted row from datatabel without redrawing datatable
        row.remove();
      },
      error => {
        this.loaderSerive.hideLoader();

        this.alertService.create(
          3000,
          'danger',
          'Error..',
          error.error.fail);
      });

  }

  reDrawDataTable() {
   $('#mainDataTable').dataTable().fnDestroy();
  }


}
