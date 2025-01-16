import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-t-signin',
  templateUrl: './t-signin.page.html',
  styleUrls: ['./t-signin.page.scss'],
  standalone: false,
})
export class TSigninPage{
  idNumber!: string;
  password!: string;

  constructor(private router: Router, private alertController: AlertController) { }

  async onLogin() {
    if(this.idNumber && this.password){
      const validTeacher = await this.validateTeacher(this.idNumber, this.password);

      if (validTeacher) {
        this.router.navigate(['t-home'])
      }
      else {
        this.showAlert('Invalid credentials, please try again.');
      }
    }
    else {
      this.showAlert('Please fill in all the fields')
    }
  }

  validateTeacher(idNumber: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (idNumber === '21-20436' && password === 'yvan1218.') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: message,
      buttons: [
        {
          text: 'OK',
          cssClass: 'custom-alert-button', 
        }
      ],
    });
    await alert.present();
  }  
  
}
