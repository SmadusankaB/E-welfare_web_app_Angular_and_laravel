import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { RoleService } from './services/role.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  errorMessage: string;

  constructor(
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService,
    public dialog: MatDialog,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.getRoles();
  }

  // Open role add modal dialofg
  openAddDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open(AddComponent, {
      width: '65%',
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getRoles();
      }
    });
  }

  // Open role edit modal dialofg
  openEditDialog(roleData: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open(EditComponent, {
      width: '50%',
      data: roleData
    });

    // handle data from modal.
    // In this case, success/error data will be handled
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getRoles();
      }
    });
  }

  // get roles from role service
  getRoles() {

    this.roleService.getRoles().subscribe(
      (success) => {
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
    let mainDataTable = $('#roleDataTable').DataTable({
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
          defaultContent: `<button  disabled class="btn btn-primary edit-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-edit"></i></button>
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
          data: 'name'
        },
        {
          data: 'description'
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
                  this.roleService.deleteRole(data.id).subscribe(
                    (success) => {

                      this.getRoles();
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
