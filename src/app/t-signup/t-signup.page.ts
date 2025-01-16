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
  userPhoto: string | undefined;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log(file);  
      const reader = new FileReader();
      reader.onload = () => {
        this.userPhoto = reader.result as string;  
        console.log(this.userPhoto);  
      };
      reader.readAsDataURL(file);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onPasswordInput() {
    this.showConfirmPassword = this.password.length > 0;
  }

}
