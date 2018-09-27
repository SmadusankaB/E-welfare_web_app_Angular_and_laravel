import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { PostService } from './services/post.service';
import { AlertService } from '../../../shared/modules/alert/services/alert.service';
import { ConfirmdialogService } from '../../../shared/modules/confirm-dialog/services/confirmdialog.service';

declare const $;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  errorMessage: string;

  constructor(
    private confDialogService: ConfirmdialogService,
    private alertService: AlertService,
    public dialog: MatDialog,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  // Open post add modal dialofg
  openAddDialog(): void {
    // data pass from modal
    const dialogRef = this.dialog.open( AddComponent, {
        width: '65%',
      //  data: {name:  'animal: this.animal'}
    });

    // handle data from modal.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getPosts();
      }
       });
  }

  // Open post edit modal dialofg
  openEditDialog(postData: any): void {
    // data pass from modal
    const dialogRef = this.dialog.open( EditComponent, {
      width: '50%',
      data: postData
    });

    // handle data from modal.
    // In this case, success/error data will be handled
    dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            this.getPosts();
          }
       });
  }

  // get roles from role service
  getPosts() {

    this.postService.getPosts().subscribe(
      (success) => {
        this.setUpDataTable(success.complete);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(posts: any) {

    const mainDataTable = $('#postsDataTable').DataTable( {
        serverSide: false,
        paging: true,
        lengthChange : true,
        searching : true,
        ordering : true,
        info : true,
        autoWidth : true,
        pageLength: 10,
        destroy: true,
        data: posts,
          columnDefs: [
            {
              targets: [0, 4],
              visible: false
            },
            {
              targets: [1],
              data: null,
              defaultContent: `<button class="btn btn-primary edit-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-edit"></i></button>
                              <button class="btn btn-danger delete-btn" style="padding-left:10px;padding-right: 10px;"><i class="fa fa-remove"></i></button>
                              `
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
              data: 'title'
            },
            {
              data: 'date'
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
                'Do you want to completly delete this post?',
                '#c82333',
                '#fff').subscribe(
                (confirmation) => {
                  // if confimation is true
                  if ( confirmation.resolved ) {
                    // to delete role
                    this.postService.deletePost(data.id).subscribe(
                      (success) => {

                        this.getPosts();
                        this.alertService.create(
                          3000,
                          'success',
                          'Success',
                          'Selected post successfully deleted.'
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
