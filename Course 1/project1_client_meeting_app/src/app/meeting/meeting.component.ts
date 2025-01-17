import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  meeting_message = "";

  meetingRef = new FormGroup({
    meet_topic:new FormControl(),
    meet_num_people:new FormControl(),
    meet_time:new FormControl()
  });

  constructor(public ds:DataService, public router:Router) {} // DI for Data Service

  addMeeting(): void {
    // creating new meeting variables
    let new_meeting = this.meetingRef.value;
    this.ds.addMeeting(new_meeting);
    console.log(new_meeting);

  }

  displayMeeting(): void {
    const dp:DatePipe = new DatePipe('en-US');
    let user = sessionStorage.getItem("emailid");
    let new_meeting = this.meetingRef.value;

    let formatted_date = dp.transform(new_meeting.meet_time, "MM-dd-YYYY HH:mm:ss");
    console.log(formatted_date);

    this.meeting_message = "Meeting created for " + user + ": " + formatted_date;
    console.log(this.meeting_message);
  }
}
