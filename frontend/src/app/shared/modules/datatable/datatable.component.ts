import { Component, OnInit, ViewChild, ElementRef
 } from '@angular/core';
import { DatatableService } from './services/datatable.service';
import { Datatable } from './interfaces/datatable';
import { UsersService } from '../../services/users/users.service';
declare const $;
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
   
   users : any[]  = [];
   searchOptions  = {faculty_name:"None", entrance_year:"None"};
   x: string;
  constructor(private dataTableService: DatatableService,
              private usersSerive: UsersService
        ) {
    
   }

  ngOnInit() {
     
    //draw data table with default options
    this.getUsers(this.searchOptions);

    //get search options from search from com
    this.dataTableService.searchOptions$.subscribe(
      (options) => {
        this.searchOptions = options;
        this.reDrawDataTable();
        this.getUsers(this.searchOptions);
      });

    //get true from edit com. if user successfully updated
    this.dataTableService.updateState$.subscribe(
      (state) => {
        this.reDrawDataTable();
        this.getUsers(this.searchOptions);
      });
  }

  //call request with options and draw table
  getUsers(options: any){
    this.usersSerive.getUsers(options).subscribe(
      response => {
        this.users.push(response['complete']);
        this.setUpDataTable(this.users);
      });
  }

  
  setUpDataTable(users:any){
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
        data:users[0],
         columnDefs: [ {
            targets: 0,
            data: null,
            defaultContent:`<button class="btn btn-primary edit-btn"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger delete-btn"><i class="fa fa-remove"></i></button>
                            <button class="btn btn-default fb-btn"><i class="fa fa-facebook"></i></button>
                            `
        } ],                
        dom: 'Bfrtip',
        buttons: [
            /*'columnsToggle',*/
            'copy', 
            'colvis',
            'csv', 
            'excel', 
            'pdf', 
            'print',
            {
                text: 'Advanced Search',
                key: '1',
                action: () => {
                  this.dataTableService.changeSerchFormState('in');
                }
            }
        ],
          columns: [
          			{
                        data: null,
                        className: "center",
                    },
                    
                    {
                      data: "first_name",
                      /*className: "hide_column",*/
                    },
                    {
                      data: "last_name"
                      //className: "clickableColumn",
                    },
                    {
                      data:"email"
                    },
                    {
                      data:"student_no"
                    },
                    {
                      data:"entrance_year"
                    },
                    {
                      data:"faculty_name"
                    }          
          ],
          rowCallback: (row: Node, data: Datatable, index: number) => {
            const self = this;
            $('.edit-btn', row).unbind('click');
            $('.edit-btn', row).bind('click', () => {
             this.dataTableService.changeEditFormSate('in'); 
             this.dataTableService.passSelectedEditRowData(data);
            });

            $('.delete-btn', row).unbind('click');
            $('.delete-btn', row).bind('click', () => {
                alert('hi');
             });

            return row;
          }
     });

    $('#mainDataTable tbody').on( 'click', '.fb-btn', function () {
      let data = mainDataTable.row( $(this).parents('tr') ).data();
      let link = 'https://www.facebook.com/public/' + data.first_name +'-'+data.last_name;
      window.open(link);
    });
  }


  reDrawDataTable(){
    this.users = [];
    $('#mainDataTable').dataTable().fnDestroy();
    $('tbody').remove();
  }
}
