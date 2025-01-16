import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TProfilePageRoutingModule } from './t-profile-routing.module';

import { TProfilePage } from './t-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TProfilePageRoutingModule
  ],
  declarations: [TProfilePage]
})
export class TProfilePageModule {}
