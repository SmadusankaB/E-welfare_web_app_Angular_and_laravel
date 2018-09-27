import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeOptionService } from '../../../../shared';
import { MoveService } from './services/move.service';
import { AlertService } from '../../../../shared/modules/alert/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

declare const $;

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {

  // collect options in database
  options: any;

  userId: number;

  // moveForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<MoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private optionService: ChangeOptionService,
    private moveServie: MoveService,
    private alertServie: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getUserInstallmetsData();
  }

  ngOnInit() {
    // load options
     // this.getOptions();

    // this.createForm();



  }

  getUserInstallmetsData() {
    this.userId = this.data.id;
    this.moveServie.getInstallmentsData(this.userId).subscribe(
      (success) => {
        // console.log(success.installemtns);
        this.setUpDataTable(success.installemtns);
      },
      (error) => {

      }
    );

  }

   // setup data table and this called by getRoles method after getting roles
   setUpDataTable(installments: any) {
   // console.log(installments);
    const mainDataTable = $('#installmentsDataTable').DataTable({
      serverSide: false,
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
      pageLength: 10,
      destroy: true,
      data: installments,
      columnDefs: [
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
          data: 'signature',

        },
        {
          data: 'payment'
        },
        {
          data: 'start_date'
        },
        {
          data: 'end_date'
        },
      ]
    });
  }

  // createForm() {
  //   this.moveForm = this.formBuilder.group(
  //     {
  //       option_description: ['', Validators.required]
  //     }
  //   );
  // }

  // getOptions() {
  //   this.optionService.getOptions().subscribe(
  //     (success) => {
  //       this.options = success.complete;
  //       console.log(this.options);
  //     },
  //     (error) => {
  //     }
  //   );
  // }

  // onSubmit(value, valid) {
  //   if (this.moveForm.valid) {
  //    // this.dialogRef.close();
  //       this.moveServie.saveChange(
  //       this.moveForm.value, this.userId
  //     ).subscribe(
  //       (success) => {
  //         this.dialogRef.close(1);
  //         this.alertServie.create(
  //           3000,
  //           'success',
  //           'Success',
  //           `successfully updated.`
  //         );
  //       },
  //       (error) => {
  //         this.dialogRef.close(0);
  //         this.alertServie.create(
  //           3000,
  //           'danger',
  //           'Success',
  //           `${error.message}.`
  //         );

  //     });

  //   }
  // }

  cancel() {
    this.dialogRef.close();
  }
}
