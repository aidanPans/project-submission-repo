import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router:Router) { }

  checkLoginDetails(login:any):void {
  //   if(login.emailid=="admin36@gmail.com" && login.password=="admin36") {
  //     return "Success! Welcome Admin!";
  //   }
  //   else {
  //     return "Failed login attempt, please try again with a different email and/or password";
  //   }
  }
}
