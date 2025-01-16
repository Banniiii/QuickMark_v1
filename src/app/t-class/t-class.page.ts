import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-t-class',
    templateUrl: './t-class.page.html',
    styleUrls: ['./t-class.page.scss'],
    standalone: false
})
export class TClassPage implements OnInit {
  className: string = '';
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];
  currentMonthIndex: number = new Date().getMonth();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Get the class name from the query parameter
    this.activatedRoute.queryParams.subscribe(params => {
      this.className = params['name'] || ''; // Assign to className variable
    });
  }

  get currentMonth() {
    return this.months[this.currentMonthIndex];
  }

  changeMonth(direction: string) {
    if (direction === 'left') {
      this.currentMonthIndex = (this.currentMonthIndex - 1 + 12) % 12;
    } else if (direction === 'right') {
      this.currentMonthIndex = (this.currentMonthIndex + 1) % 12;
    }
  }
  
  showAttendance(month: string) {
    console.log(`Showing attendance for ${month}`);
  }
}
