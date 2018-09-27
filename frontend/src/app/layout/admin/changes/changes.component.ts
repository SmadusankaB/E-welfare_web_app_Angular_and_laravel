import { Component, OnInit } from '@angular/core';
import { ChangesService } from './services/changes.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

declare const $;

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {

  years: number[] = [];
  current_year: number;
  yearSelectForm: FormGroup;

  constructor(
    private changeService: ChangesService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.makeYears();
    this.makeForm();
    this.loadChanges();
  }

  makeForm() {
    this.yearSelectForm = this.formBuilder.group({
      entrance_year: ['', '']
    });
  }

  // load changes by current year when page is loading
  loadChanges() {
    this.changeService.getChanges().subscribe(
      (success) => {
        console.log(success);
        this.setUpDataTable(success.complete);
      },
      (error) => {

      }
    );
  }

  // load changes by year when user select a year from year select list
  getChangesWithYear(value) {
    console.log(value);
    this.changeService.getChangesByYear(value).subscribe(
      (success) => {
        console.log(success);
        this.setUpDataTable(success.complete);
      },
     (error) => {

     }
    );
  }

  // setup data table and this called by getRoles method after getting roles
  setUpDataTable(changes: any) {
    // console.log(faculties);
    const mainDataTable = $('#changesDataTable').DataTable({
      serverSide: false,
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
      pageLength: 10,
      destroy: true,
      data: changes,
      columnDefs: [
        {
          targets: [1],
          visible: false
        }
      ],
      columns: [
        {
          data: 'student_no',
        },
        {
          data: 'first_name',

        },
        {
          data: 'last_name'
        },
        {
          data: 'exchange_description'
        },
        {
          data: 'created_at'
        },
      ],
      rowCallback: (row: Node, data: any, index: number) => {

        const self = this;

        $('.edit-btn', row).unbind('click');
        $('.edit-btn', row).bind('click', () => {

        });

        $('.delete-btn', row).unbind('click');
        $('.delete-btn', row).bind('click', () => {

        });
        return row;
      }
    });
  }


  // for year dropdown
  makeYears() {
    this.current_year = new Date().getFullYear();
    for (let i = this.current_year; i > 2000; i--) {
      // console.log(i);
      this.years.push(i);
    }

  }

}
