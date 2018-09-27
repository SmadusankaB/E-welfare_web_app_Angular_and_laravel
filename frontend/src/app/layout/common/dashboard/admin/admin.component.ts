import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  encapsulation: ViewEncapsulation.None;

  nOfInstallments: number;
  nOfFaculties: number;
  nOfPosts: number;
  nOfSchlarships: number;
  faculties: any;

  nOSignedUser: number;
  nORegisteredUser: number;
  nOActiveUser: number;
  nORejectedUser: number;

  years: number[] = [];
  current_year: number;

  // This is for select years in
  // faculty vs users graph
  facVsUserForm: FormGroup;

  realTime: any;
   x = 1;

  // Doughnut - faculty vs number of registered students
  public doughnutChartLabels1: string[] = [];
  public doughnutChartDataMahapola: number[] = [];
  public doughnutChartDataBursary: number[] = [];
  public doughnutChartType: string = 'doughnut';

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    'January',
    'Fabruary',
    'March',
    'Appril',
    'May',
    'June',
    'July',
    'Augest',
    'September',
    'October',
    'November',
    'December'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    { data: [], label: 'Mahapola' },
    { data: [], label: 'Bursary' }
  ];



  // constructor
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dashboardService: DashboardService,
    private cokeiService: CookieService
  ) {
    this.fetchCoutingData();
    this.facthFaculties();
    // this.getCurrentMonths();
  }

  ngOnInit() {
    this.createFacVsUserForm();
    this.makeYears();

    // get data by 5 seconnd
    // real time feature
    this.realTime = IntervalObservable.create(5000)
    .subscribe(() => {
     this.getRealtimeData();
   });
  }

  // faculty vs number of users
  createFacVsUserForm() {
    this.facVsUserForm = this.formBuilder.group({
      fa_v_user_year_select_list: ['', '']
    });
  }

  fetchCoutingData() {
    // -----------------------------------------------first row of dashboard -------------------------------//
    const result = this.route.snapshot.data['dashboardResponse'];
    // console.log(result.complete[0]);
    // get each counts separately
    this.nOfInstallments = result.complete['n_of_installments'];
    this.nOfFaculties = result.complete['n_of_faculties'];
    this.nOfPosts = result.complete['n_of_posts'];
    this.nOfSchlarships = result.complete['n_of_scholarship'];

    // -------------------------------get get students for Doughnut---------------------------------------------//
    // get nuber of users faculty vise and schlarship vise
    // console.log(result.facul_and_schol_vs_user[0]);
    for (let i = 0; i < (result.facul_and_schol_vs_user.length); i++) {
      if (i % 2 === 0) {
        // console.log('im even:' + result.facul_and_schol_vs_user[i] + ':' + i);
        this.doughnutChartDataMahapola.push(result.facul_and_schol_vs_user[i]);
      } else {
        // console.log('im odd:' + result.facul_and_schol_vs_user[i] + ':' + i);
        this.doughnutChartDataBursary.push(result.facul_and_schol_vs_user[i]);
      }
    }


    // -------------------------------get get students for Barcahrt---------------------------------------------//
    // get nuber of users faculty vise and schlarship vise
    // console.log(result.facul_and_schol_vs_user[0]);
    for (let i = 0; i < (result.period_and_schol_vs_user.length); i++) {
      if (i % 2 === 0) {
        // console.log('im even:' + result.facul_and_schol_vs_user[i] + ':' + i);
        this.barChartData[0].data.push(result.period_and_schol_vs_user[i]);
      } else {
        // console.log('im odd:' + result.facul_and_schol_vs_user[i] + ':' + i);
        this.barChartData[1].data.push(result.period_and_schol_vs_user[i]);
      }
    }
  }

  // -------------------------------------------- facultis as lable of Doughnut -------------------------//
  facthFaculties() {
    const result = this.route.snapshot.data['facultyResolver'];
    const facultyArray = result.complete;
    for (let i = 0; i < facultyArray.length; i++) {
      this.doughnutChartLabels1.push(facultyArray[i].faculty_name);
    }
  }


  // --------------------------------------------- make years for year dropdown-----------------------------//
  makeYears() {
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year; i > 2000; i--) {
      // console.log(i);
      this.years.push(i);
    }
  }

  // -----------------------------------onchange event for year select list for Doughnut--------------------//
  getWithYearForDoughnut(value) {
    const m: any = [];
    const b: any = [];
    this.dashboardService.getUserByYearsForDoughnut(value).subscribe(
      (success) => {
        this.doughnutChartDataMahapola = [];
        this.doughnutChartDataBursary = [];
        for (let i = 0; i < (success.facul_and_schol_vs_user.length); i++) {
          if (i % 2 === 0) {
            m.push(success.facul_and_schol_vs_user[i]);
          } else {
            b.push(success.facul_and_schol_vs_user[i]);
          }
        }
        this.doughnutChartDataMahapola = m;
        this.doughnutChartDataBursary = b;
      },
      (error) => { }
    );
  }

  // ---------------------------------- this method get periods of current year as lables of bar chard ----------//
  getCurrentMonths() {
    const result = this.route.snapshot.data['monthsResolver'];
    const periodsArray = result.complete;
    for (let i = 0; i < periodsArray.length; i++) {
      this.barChartLabels.push(periodsArray[i].start_date);
    }
  }

  // -----------------------------------onchange event for year select list for BarCharts--------------------//
  getWithYearForBarChart(value) {
    // console.log(value);
    const m: any = [];
    const b: any = [];
    this.dashboardService.getUserByYearsForBarChart(value).subscribe(
      (success) => {
        this.barChartData[0].data = [];
        this.barChartData[1].data = [];
        for (let i = 0; i < (success.period_and_schol_vs_user.length); i++) {
          if (i % 2 === 0) {
            m.push(success.period_and_schol_vs_user[i]);
          } else {
            b.push(success.period_and_schol_vs_user[i]);
          }
        }
        this.barChartData = [
          { data: m },
          { data: b }];
      },
      (error) => { }
    );
  }

  // ------------------------------ get real time data for dashboard---------------------------------------//
  getRealtimeData() {

    this.dashboardService.getSignedUserRealtime().subscribe(
      (success) => {
        // console.log(success);
        this.nOSignedUser = success.complete['numOfUsers'];
        this.nORegisteredUser = success.complete['n_of_registered_users'];
        this.nOActiveUser = success.complete['n_of_approved_accounts'];
        this.nORejectedUser = success.complete['n_of_rejected_accounts'];

      },
      (error) => {

      }
    );

  }


  // --------------------------unsubscribe realtime observable when component destroy---------------------------//
  ngOnDestroy() {
    this.realTime.unsubscribe();
  }
}
