import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:string = "";
  constructor(public router:Router, public ds:DataService) {}

  ngOnInit(): void {
    let obj = sessionStorage.getItem("emailid");
    if (obj != null) {
      this.user = obj;
    }
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(["/login"], {skipLocationChange:true});
  }
}
