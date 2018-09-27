import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const $;

@Component({
  selector: 'app-generalauser',
  templateUrl: './generalauser.component.html',
  styleUrls: ['./generalauser.component.scss']
})
export class GeneralauserComponent implements OnInit {

  period = 'No data';
  scholarship = 'No data';
  installment = 'No data';
  signatureStatus = 'No data';

  tableData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getUserDashboardData();
  }

  ngOnInit() {
    this.setUpDataTable(this.tableData);
  }

  getUserDashboardData() {
    const result = this.route.snapshot.data['userDashboardResolver'];

    this.period = result.complete['period'];
    this.scholarship = result.complete['scholership_name'];
    this.installment = result.complete['n_of_installments'];
    this.signatureStatus = result.complete['signature_status'];
    this.tableData = result.installemtns;
    // console.log(result.installemtns);
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(installments: any) {
    console.log(installments);
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


}
