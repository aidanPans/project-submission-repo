import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });

  constructor(public router:Router, public ds:DataService) { // DI for Router API

  }

  checkLoginDetails(): void {
    let user_type = "";
    let login = this.loginRef.value;
    user_type = this.ds.checkLoginDetails(login);   // setting the user type

    // Checking login and user credentials
    if (user_type == "DNE") {
      // user does not exist
      alert("Unsuccessful Login Attempt. Please Try Again.");
    }
    else {
      if (user_type == "client") {
        // user is a client
        alert("Successful Login!");
        sessionStorage.setItem("emailid", login.emailid);
        this.router.navigate(["/home"], {skipLocationChange:true});
      }
      else {
        // user is an admin
        alert("Successful Login!");
        sessionStorage.setItem("emailid", login.emailid);
        this.router.navigate(["/admin_home"], {skipLocationChange:true});
      }
    }
    this.loginRef.reset();
  }

}
