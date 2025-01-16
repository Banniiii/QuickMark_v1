import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: false,
})
export class LoadingPage implements OnInit {
  textToType: string = 'Your friendly QR-coded attendance checker';
  typedText: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.typeText(this.textToType, 100);
    setTimeout(() => {
      this.router.navigate(['/landing-page']);
    }, 5000);
  }

  typeText(text: string, speed: number) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        this.typedText += text.charAt(index);
        document.querySelector('.typing-text')!.textContent = this.typedText;
        index++;
      } else {
        clearInterval(interval); 
      }
    }, speed);
  }

}
