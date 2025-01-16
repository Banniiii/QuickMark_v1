import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { THomePageRoutingModule } from './t-home-routing.module';

import { THomePage } from './t-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    THomePageRoutingModule
  ],
  declarations: [THomePage]
})
export class THomePageModule {}
