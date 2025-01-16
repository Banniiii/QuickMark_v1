import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-t-attendance',
  templateUrl: './t-attendance.page.html',
  styleUrls: ['./t-attendance.page.scss'],
  standalone: false,
})
export class TAttendancePage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back(); 
  }

  ngOnInit() {
  }

}
