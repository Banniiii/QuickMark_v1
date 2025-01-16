import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-s-signin',
  templateUrl: './s-signin.page.html',
  styleUrls: ['./s-signin.page.scss'],
  standalone: false,
})
export class SSigninPage{
  idNumber!: string;
  password!: string;

  constructor(private router: Router, private alertController: AlertController) { }

  async onLogin() {
    if(this.idNumber && this.password){
      const validStudent = await this.validateStudent(this.idNumber, this.password);

      if (validStudent) {
        this.router.navigate(['s-profile'])
      }
      else {
        this.showAlert('Invalid credentials, please try again.');
      }
    }
    else {
      this.showAlert('Please fill in all the fields')
    }
  }

  validateStudent(idNumber: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (idNumber === '21-20437' && password === 'yvan1218.') {
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
