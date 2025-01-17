import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // need an array of clients, meetings, and logins
  // need two methods per array: one getter and one adder

  logins:Array<any> = [];

  clients:Array<any> = [];

  meetings:Array<any> = [];

  constructor() { } // DI for service class

  addClient(client_data:any): void {
    this.clients.push(client_data);
    console.log(client_data);
    console.log(this.clients);
  }

  getAllClient():Array<any> {
    // TODO
    return this.clients;
  }

  addMeeting(meeting_data:any): void {
    this.meetings.push(meeting_data);
  }

  getAllMeetingInfo(): Array<any> {
    //TODO
    console.log("get all meetings (service layer) called " + this.meetings);
    return this.meetings;
  }

  addLogin(login_data:any): void {
    this.logins.push(login_data);
    console.log(login_data);
    console.log(this.logins);
  }

  getAllLogins(): Array<any> {
    console.log("get all logins (service layer) called " + this.logins);
    return this.logins;
  }

  checkLoginDetails(login_data:any): string {
    let user_type = "";
    let result = this.logins.find(l => l.emailid == login_data.emailid && l.password == login_data.password);
    
    if (result == undefined) {
      if (login_data.emailid == "admin@gmail.com" && login_data.password == "admin123") {
        user_type = "admin";
      }
      else {
        user_type = "DNE";
      }
    }
    else {
      user_type = "client";
    }
    
    return user_type;
  }

}
