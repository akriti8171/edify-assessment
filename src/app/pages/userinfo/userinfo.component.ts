import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  todoList=[];
  todo:string="";
  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
 
  onAdd(){
    console.log(this.todo)
    this.todoList=[...this.todoList,this.todo]
    console.log("Todos",this.todoList)
    this.todo=""
  }
  onDelete(index:number){
    this.todoList.splice(index,1);
  }
}
