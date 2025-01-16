import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SProfilePageRoutingModule } from './s-profile-routing.module';

import { SProfilePage } from './s-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SProfilePageRoutingModule
  ],
  declarations: [SProfilePage]
})
export class SProfilePageModule {}
