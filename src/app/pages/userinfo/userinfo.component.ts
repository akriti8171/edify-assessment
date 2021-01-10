import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  public todoText: string;
  constructor(private todoService: TodoService,public authservice: AuthService, private router: Router) { 
    this.todoText = '';
  }

  ngOnInit(): void {
    
  }
 
  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
