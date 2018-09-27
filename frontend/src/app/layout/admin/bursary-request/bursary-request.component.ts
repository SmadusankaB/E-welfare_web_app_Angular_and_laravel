import { Component, OnInit } from '@angular/core';
import { BursaryRequestService } from './service/bursary-request.service';
import { ViewComponent } from './view/view.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bursary-request',
  templateUrl: './bursary-request.component.html',
  styleUrls: ['./bursary-request.component.scss']
})
export class BursaryRequestComponent implements OnInit {

  errorMessage: string;

  constructor(
    private bursaryRequestService: BursaryRequestService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log('hi');
    this.getBursaryRequests();
  }


  // Open role add modal dialofg
  openViewDialog(data: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '65%',
      height: '70%',
      data: data
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.getRoles();
      }
    });
  }



  // get roles from role service
  getBursaryRequests() {

    this.bursaryRequestService.getBursaryRequests().subscribe(
      (success) => {
        console.log(success.complete);
        this.setUpDataTable(success.complete);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(roles: any) {
    // console.log(roles);
    let mainDataTable = $('#bursaryRequestsDataTable').DataTable({
      serverSide: false,
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
      pageLength: 10,
      destroy: true,
      data: roles,
      columnDefs: [
        {
          targets: [1],
          data: null,
          defaultContent:`<button  class="btn btn-primary edit-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-edit"></i></button>
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
          data: 'student_no',
        },
        {
          data: 'first_name'
        },
        {
          data: 'last_name'
        },
        {
          data: 'scholership_status'
        },
        {
          data: 'apply_again_status',
        }
      ],
      rowCallback: (row: Node, data: any, index: number) => {

        const self = this;

        $('.edit-btn', row).unbind('click');
        $('.edit-btn', row).bind('click', () => {
          this.openViewDialog(data);
        });

        $('.delete-btn', row).unbind('click');
        $('.delete-btn', row).bind('click', () => {

        //   this.confDialogService.create(
        //     'Confirmation!',
        //     'Do you want to completly delete this user?',
        //     '#c82333',
        //     '#fff').subscribe(
        //       (confirmation) => {
        //         // if confimation is true
        //         if (confirmation.resolved) {
        //           // to delete role
        //           this.roleService.deleteRole(data.id).subscribe(
        //             (success) => {

        //               this.getRoles();
        //               this.alertService.create(
        //                 3000,
        //                 'success',
        //                 'Create...',
        //                 'The role has been successfully deleted.'
        //               );

        //             },
        //             (error) => {
        //               this.alertService.create(
        //                 3000,
        //                 'error',
        //                 'Error...',
        //                 'Something gone wrong'
        //               );
        //             }
        //           );
        //         }
        //       });
         });
        return row;
      }
    });
  }

}
