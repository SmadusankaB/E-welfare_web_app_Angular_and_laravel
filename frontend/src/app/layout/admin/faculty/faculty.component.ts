import { Component, OnInit,  } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { FacultyService } from '../../../shared/services/faculty/faculty.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';

declare const $;

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  errorMessage: string;

  constructor(
    public dialog: MatDialog,
    private facultyService: FacultyService,
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getFaculties();
  }

  // Open faculty add modal dialofg
  openAddDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( AddComponent, {
        width: '50%',
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getFaculties();
      }
       });
  }

  // Open faculty edit modal dialofg
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
            this.getFaculties();
          }
       });
  }

  // get roles from role service
  getFaculties() {

    this.facultyService.getFaculties().subscribe(

      (success) => {
        // console.log(success);
        this.setUpDataTable(success.complete);
      },
      (error) => {

        console.log('error');
        this.errorMessage = error.message;
      }
    );
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(faculties: any) {
    // console.log(faculties);
    const mainDataTable = $('#facultyDataTable').DataTable( {
      serverSide: false,
      paging: true,
      lengthChange : true,
      searching : true,
      ordering : true,
      info : true,
      autoWidth : true,
      pageLength: 10,
      destroy: true,
      data: faculties,
        columnDefs: [
          {
            targets: [1],
            data: null,
            defaultContent:`<button class="btn btn-primary edit-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-edit"></i></button>
                           <button disabled class="btn btn-danger delete-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-remove"></i></button>`

           },
          {
            targets: [0],
            visible: false
          }
        ],
        columns: [
          {
            data: 'id',
          },
          {
           data: null,
              className: 'center',
          },
          {
            data: 'faculty_name'
          },
        ],
        rowCallback: (row: Node, data: any, index: number) => {

          const self = this;

          $('.edit-btn', row).unbind('click');
          $('.edit-btn', row).bind('click', () => {


            this.openEditDialog(data);
            // pass data in the selected row into edit form through edit service
            // this.roleEditFormService.passSelectedRowData(data);
          });

          $('.delete-btn', row).unbind('click');
          $('.delete-btn', row).bind('click', () => {

            this.confDialogService.create(
              'Confirmation!',
              'Do you want to completly delete this faculty?',
              '#c82333',
              '#fff').subscribe(
              (confirmation) => {
                // if confimation is true
                if (confirmation.resolved) {
                  // to delete faculty
                  this.facultyService.deleteFaculty(data.id).subscribe(
                    (success) => {

                      this.getFaculties();
                      this.alertService.create(
                        3000,
                        'success',
                        'Create...',
                        'Successfully deleted.'
                      );

                    },
                    (error) => {
                      this.alertService.create(
                        10000,
                        'error',
                        'Error...',
                        `${error.message}`
                      );
                    }
                  );
                }
              });
          });
          return row;
        }
   });
  }
}



