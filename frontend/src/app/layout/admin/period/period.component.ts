import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { PeriodService } from './services/period.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';


@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  errorMessage: string;

  constructor(
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService,
    public dialog: MatDialog,
    private periodService: PeriodService
  ) { }

  ngOnInit() {
    this.getPeriods();
  }

  // Open period add modal dialofg
  openAddDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( AddComponent, {
        width: '65%',
        height: '60%'
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getPeriods();
      }
       });
  }

  // Open period edit modal dialofg
  openEditDialog(roleData: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open( EditComponent, {
      width: '50%',
      data: roleData
    });

    // handle data from modal.
    // In this case, success/error data will be handled
    dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            this.getPeriods();
          }
       });
  }

  // get period from role service
  getPeriods() {

    this.periodService.getPeriods().subscribe(
      (success) => {
        this.setUpDataTable(success.complete);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(periods: any) {
    // console.log(roles);
    let mainDataTable = $('#periodDataTable').DataTable( {
        serverSide: false,
        paging: true,
        lengthChange : true,
        searching : true,
        ordering : true,
        info : true,
        autoWidth : true,
        pageLength: 10,
        destroy: true,
        data: periods,
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
              data: 'start_date'
            },
            {
              data: 'end_date'
            },
            {
              data: 'status'
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

              this.confDialogService.create(
                'Confirmation!',
                'Do you want to completly delete this user?',
                '#c82333',
                '#fff').subscribe(
                (confirmation) => {
                  // if confimation is true
                  if (confirmation.resolved) {
                    // to delete role
                    this.periodService.deletePeriod(data.id).subscribe(
                      (success) => {

                        this.getPeriods();
                        this.alertService.create(
                          3000,
                          'success',
                          'Create...',
                          'The role has been successfully deleted.'
                        );

                      },
                      (error) => {
                        this.alertService.create(
                          3000,
                          'error',
                          'Error...',
                          'Something gone wrong'
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
