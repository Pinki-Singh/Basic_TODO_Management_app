import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var baseUrl:string  ='http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})

export class TODOManagementService { 
  constructor(private http :HttpClient) { }
  createToDo(toDo){
    return this.http.post(baseUrl+'toDos',toDo);
  }
  getToDoData(){
     return this.http.get(baseUrl+'toDos');
  }
  updateToDO(toDo){
    return this.http.put(baseUrl+'toDos/'+toDo.id,toDo)
  }
  deleteToDo(toDo){
    return this.http.delete(baseUrl+'toDos/'+toDo.id)
  }
}
