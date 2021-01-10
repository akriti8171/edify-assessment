import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  todoList : string[] = [];
  todo:string="";
  constructor(private router: Router) { 
    this.todoList = JSON.parse(localStorage.getItem('Todos') || '{}')
  }

  ngOnInit(): void {
    
  }
 
  onAdd(){
    console.log(this.todo)
    this.todoList = [...this.todoList,this.todo]
    localStorage.setItem('Todos', JSON.stringify(this.todoList));
    console.log("Todos", this.todoList)
    this.todo =""
  }
  onDelete(index:number){
    this.todoList.splice(index,1);
    localStorage.setItem('Todos', JSON.stringify(this.todoList));
  }
}
