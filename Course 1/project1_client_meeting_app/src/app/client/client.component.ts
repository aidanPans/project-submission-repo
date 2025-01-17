import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientRef = new FormGroup({
    cli_name:new FormControl(),
    emailid:new FormControl(),
    cli_address:new FormControl(),
    password:new FormControl(),
    RePassword:new FormControl()
  });

  constructor(public ds:DataService, public router:Router) { // DI for Data Service
  }

  addClient(): void {
    // creating new client and login variables with data
    let new_client = this.clientRef.value;
    let new_login = {emailid:new_client.emailid, password:new_client.password};
    console.log(new_login);

    if (new_client.password != new_client.RePassword) {
      alert("Passwords do not match, please try again");
      this.clientRef.reset();
    }
    else {
      // adding the new client and login data using the service adder functions in data.service.ts file
      this.ds.addClient(new_client);
      this.ds.addLogin(new_login);
      this.router.navigate(["/login"], {skipLocationChange:true});
    }

    this.clientRef.reset();
  }

}
