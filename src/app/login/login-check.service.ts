import { Injectable } from '@angular/core';

import { LoginComponent } from './login.component';
@Injectable({
  providedIn: 'root'
})

export class LoginCheckService {

  isLoggedIn=false;
login(username:string,password:string)
{
  if(username==localStorage.getItem("email") && password==localStorage.getItem("password"))
  {
    this.isLoggedIn=true;
    console.log(this.isLoggedIn);
    return true;
  }
  else
  {
    this.isLoggedIn=false;
    console.log(this.isLoggedIn);
    return false;
  }
}
  constructor() {console.log(this.isLoggedIn," Constructor"); }
}
