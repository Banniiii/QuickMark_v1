import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TSignupPageRoutingModule } from './t-signup-routing.module';

import { TSignupPage } from './t-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TSignupPageRoutingModule
  ],
  declarations: [TSignupPage]
})
export class TSignupPageModule {}
