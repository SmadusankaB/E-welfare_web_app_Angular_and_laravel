import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from  '../../services/users/users.service';
import { LeftsideEditFormService  } from './services/leftside-edit-form.service';


@Component({
  selector: 'app-leftside-edit-form',
  templateUrl: './leftside-edit-form.component.html',
  styleUrls: ['./leftside-edit-form.component.scss']
})
export class LeftsideEditFormComponent implements OnInit {

	newData: any;
	editForm : FormGroup;
	full_name: string;
  id:number;
	errorMessage: string[] = [];

  constructor(
  	public formBuilder: FormBuilder,
  	private leftEditService: LeftsideEditFormService,
  	private usersService: UsersService,

  	) { }

  ngOnInit() {

  	this.createForm();
  	this.getSelectedRowData();
  }

  //create form 
  createForm(){
  	this.editForm = this.formBuilder.group({
  		email: ['',Validators.email],
  		student_no: ['', Validators.required]
  		});
  }

  // from useraccount com to leftedit com with row data
  getSelectedRowData(){
     this.leftEditService.rowEditableData$.subscribe(
      (editableData) => {
        this.id = editableData.id;
        this.full_name = `${editableData.first_name}`+` ${editableData.last_name}` ;
        this.editForm.patchValue(editableData);
        this.errorMessage = [];
      });
  }

  // update user, only email and student number by the admin
   onSubmit(value, valid) {
		if (this.editForm.valid) {
		this.usersService.updateSlectedUser(this.editForm.value, this.id).
   		subscribe(
   			response => {
          //slide out edit form and pass update status
   				this.leftEditService.changeStatus('out');
          this.leftEditService.passUpdateState(response['complete']);
          this.errorMessage = [];
   				
   			},
   			error => {
   				this.errorMessage = [];
   				if(error['fail'].student_no){
	              this.errorMessage.push(error['fail'].student_no[0]);
	        }
	        if(error['fail'].email){
	              this.errorMessage.push(error['fail'].email[0]);
	        }
   			});
   	}
  	
  }

  //from leftedit com to useraccount com
  toggleSideBar(){
  	this.leftEditService.changeStatus('out');
  }

}
