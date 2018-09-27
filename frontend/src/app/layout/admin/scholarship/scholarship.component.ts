import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { ScholarshipService } from '../../../shared/services/sholarship/scholarship.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';

declare const $;

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss']
})
export class ScholarshipComponent implements OnInit {

  errorMessage: string;

  constructor(
    public dialog: MatDialog,
    private scholarshipService: ScholarshipService,
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService
  ) { }


    ngOnInit() {
    this.getScholarships();
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
        this.getScholarships();
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
            this.getScholarships();
          }
       });
  }

  // get roles from role service
  getScholarships() {

    this.scholarshipService.getScholarships().subscribe(

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
  setUpDataTable(scholarships: any) {
    // console.log(faculties);
    const mainDataTable = $('#scholarshipDataTable').DataTable( {
      serverSide: false,
      paging: true,
      lengthChange : true,
      searching : true,
      ordering : true,
      info : true,
      autoWidth : true,
      pageLength: 10,
      destroy: true,
      data: scholarships,
        columnDefs: [
          {
            targets: [1],
            data: null,
            defaultContent:`<button class="btn btn-primary edit-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-edit"></i></button>
                            <button disabled class="btn btn-danger delete-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-remove"></i></button>
                            `
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
            data: 'scholership_name'
          },
          {
            data: 'amount'
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
                  console.log(data.id);
                  this.scholarshipService.deleteScholarships(data.id).subscribe(

                    (success) => {
                      this.getScholarships();
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
