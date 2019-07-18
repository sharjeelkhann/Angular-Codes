import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movies Login Menu';
  loginForm: FormGroup;
  constructor(private route:Router)
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
      this.route.navigate(['home'])
    }
    else
    {
     window.alert("Wrong email and password !!!");
    }
  }
  
}