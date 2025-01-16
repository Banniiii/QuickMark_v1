import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SSigninPageRoutingModule } from './s-signin-routing.module';

import { SSigninPage } from './s-signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SSigninPageRoutingModule
  ],
  declarations: [SSigninPage]
})
export class SSigninPageModule {}
