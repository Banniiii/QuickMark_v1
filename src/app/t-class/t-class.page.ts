import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController) {}

  ngOnInit() {
    // Get the class name from the query parameter
    this.activatedRoute.queryParams.subscribe(params => {
      this.className = params['name'] || ''; 
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

  async takeAttendance() {
    const alert = await this.alertController.create({
      header: 'Description',
      inputs: [
        {
          name: 'description',
          type: 'text',
          placeholder: 'Class description...',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'custom-cancel-button',
          handler: () => {
            console.log('Attendance canceled');
          },
        },
        {
          text: 'Generate QR',
          cssClass: 'custom-generate-button',
        },
      ],
    });

    await alert.present();
  }
}
