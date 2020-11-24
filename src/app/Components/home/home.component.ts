import { Component, OnInit } from '@angular/core';
import { TODOManagementService } from '../../Services/todo-management.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [TODOManagementService]
})
export class HomeComponent {
  allToDoList: Object;
  isEdit = false;
  toDoList = {
    title:'',
    details:''
  }
  constructor(private toDoManagementService: TODOManagementService ) { }

  addToDoList(formObj){
    console.log(formObj);
      this.toDoManagementService.createToDo(formObj).subscribe((response)=>{
          console.log(response);
          this.getAllTODoLists();
      })
    this.toDoList.title = '';
    this.toDoList.details = '';
  }
  getAllTODoLists(){
    this.toDoManagementService.getToDoData().subscribe((response)=>{
      this.allToDoList = response;
    })
  }
  editToDo(toDoLists){
    this.isEdit = true;
    this.toDoList = toDoLists;
  }
  deleteToDo(toDo){
    this.toDoManagementService.deleteToDo(toDo).subscribe(()=>{
      this.getAllTODoLists();
    })
  }
  updateToDo(){
    this.isEdit = !this.isEdit;
    this.toDoManagementService.updateToDO(this.toDoList).subscribe(()=>{
      this.getAllTODoLists();
    })
    this.toDoList.title = '';
    this.toDoList.details = '';
  }
  ngOnInit(){
    this.getAllTODoLists();
  };

}


