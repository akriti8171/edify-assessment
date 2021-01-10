import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="";
  password="";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle


  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/userinfo'])
      }).catch((_error:any) => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email:string, password:string)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}
