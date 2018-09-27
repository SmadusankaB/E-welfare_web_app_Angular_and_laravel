import { Component, OnInit } from '@angular/core';
import { TestTableService } from './test-table.service';

declare const $;

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit {

  constructor(private testTableService: TestTableService) { }

  ngOnInit() {


    this.testTableService.getUsers().subscribe(
      response => {
      	
        this.setUpDataTable(response);
      });  	 
  }

  setUpDataTable(users:any){
    console.log(users);
    /*let mainDataTable = $('#mainDataTable').DataTable( {
        serverSide: true,
        proccesing: true,
        data:users,
                         
         columns: [
                    {data:"student_no"},
                    
                    {data: "first_name",},
                    
                    {data: "last_name"}         
          ]
     });*/    
    
  }

  
}
