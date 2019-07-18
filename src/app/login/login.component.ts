import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PasswordModule} from 'primeng/password';
import { LoginCheckService } from './login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Movies Login Menu';
  loginForm: FormGroup;
  constructor(private route:Router,private logincheck:LoginCheckService)
  {

  }
  ngOnInit() 
  {
    localStorage.setItem('email','admin@admin.com');
    localStorage.setItem('password','12345678');
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)])
    });
  }
  verifyLogin():void
  {
    if(localStorage.getItem('email')==this.loginForm.value.email && localStorage.getItem('password')==this.loginForm.value.password)
    {
      this.logincheck.login(this.loginForm.value.email,this.loginForm.value.password)
      this.route.navigate(['home'])
    }
    else
    {
     window.alert("Wrong email and password !!!");
    }
  }
  

}
