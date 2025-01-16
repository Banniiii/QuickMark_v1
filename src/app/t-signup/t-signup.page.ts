import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-t-signup',
    templateUrl: './t-signup.page.html',
    styleUrls: ['./t-signup.page.scss'],
    standalone: false
})
export class TSignupPage implements OnInit {
  password: string = '';
  showConfirmPassword: boolean = false;
  userPhoto: string | ArrayBuffer | null = null;
  
  constructor() { }

  ngOnInit() {
  }

  onPasswordInput() {
    this.showConfirmPassword = this.password.length > 0;
  }

}
