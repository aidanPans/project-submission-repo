import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  meeting_array:Array<any> = [];
  login_array:Array<any> = [];
  client_array:Array<any> = [];
  client_meeting:Array<any> = []; // this should hold info from meeting array and client array

  meeting:boolean = false;
  login:boolean = false;
  client:boolean = false;


  constructor(public router:Router, public ds:DataService) { }

  logout(): void {
    this.router.navigate(["/login"], {skipLocationChange:true});
  }

  displayAllClients(): void {
    this.client_array = this.ds.getAllClient();
    this.client = true;
    this.meeting = false;
    this.login = false;
  }

  displayAllLogins(): void {
    this.login_array = this.ds.getAllLogins();
    this.client = false;
    this.meeting = false;
    this.login = true;
  }

  displayAllMeetings(): void {
    this.meeting_array = this.ds.getAllMeetingInfo();
    this.client = false;
    this.meeting = true;
    this.login = false;
  }
}  
