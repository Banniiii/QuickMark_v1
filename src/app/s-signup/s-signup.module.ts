import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SSignupPageRoutingModule } from './s-signup-routing.module';

import { SSignupPage } from './s-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SSignupPageRoutingModule
  ],
  declarations: [SSignupPage]
})
export class SSignupPageModule {}
