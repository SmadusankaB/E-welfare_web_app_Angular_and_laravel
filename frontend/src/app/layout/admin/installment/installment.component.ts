import { Component, OnInit } from '@angular/core';
import { InstallmentService } from './services/installment.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FacultyService } from '../../../shared';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { MatDialog } from '@angular/material';
import { LoaderService } from '../../../shared/modules/loader/services/loader.service';

declare const $;

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {

  searchOptions  = {
  faculty_name: 'None',
  entrance_year: new Date().getFullYear().toString(),
  scholership_name: 'None',
  period_start_date: 'None'};
  apiRoot: string;

  constructor(
    private installmentService: InstallmentService,
    public formBuilder: FormBuilder,
    private facultyService: FacultyService,
    public dialog: MatDialog,
    private loaderSerive: LoaderService
  ) { }

  ngOnInit() {
    this.getInstallments(this.searchOptions);
  }

  // Open user advanced search modal dialofg
  openAdvancedSearchDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( AdvancedSearchComponent, {
        width: '50%',
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // if (result === 1) {

        // result contains search form data
         this.getInstallments(result);
      // }

       });
  }

  // call post request with options and draw table
  getInstallments(options: any) {

    this.loaderSerive.showLoader();
    this.installmentService.getInstallmentData(options).subscribe(
      response => {
         // console.log(response['complete']);
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
        pageLength: 10,
        destroy: true,
        data: users,
         columnDefs: [ {
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
                text: 'Advanced search',
                key: '1',
                action: () => {
                  this.openAdvancedSearchDialog();
                }
            }
        ],
          columns: [
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
                      data: 'faculty_name'
                    },
                    {
                      data: 'entrance_year'
                    },
                    {
                      data: 'nic'
                    },
                    {
                      data: 'email'
                    },
                    {
                      data: 'signature'
                    }
          ],
          rowCallback: (row: Node, data: any, index: number) => {
            const self = this;
            $('.edit-btn', row).unbind('click');
            $('.edit-btn', row).bind('click', () => {
             // this.openEditDialog(data);
            });

            $('.delete-btn', row).unbind('click');
            $('.delete-btn', row).bind('click', () => {
                // // display confimation messgae
                // this.confDialogService.create(
                //   'Confirmation!',
                //   'Do you want to completly delete this user?',
                //   '#c82333',
                //   '#fff').subscribe(
                //   (confirmation) => {
                //     // if confimation is true
                //     if (confirmation.resolved) {
                //       // call users service to delete user
                //       this.deleteSelectedUser(data.id, row);
                //     }
                //   });
             });
            $('.more-btn', row).unbind('click');
            $('.more-btn', row).bind('click', () => {
               // this.openMoveDialog(data);
              // this.userId = data.id;
              // console.log(data.id);
              // this.router.navigate(['u/admin/installments']);
             //  this.router.


             });
            $('.fb-btn', row).unbind('click');
            $('.fb-btn', row).bind('click', () => {
              // const link = 'https://www.facebook.com/public/' + data.first_name +'-'+data.last_name;
              // window.open(link);
             }
            );
            return row;
          }
     });
  }

}
