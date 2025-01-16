import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TClassPageRoutingModule } from './t-class-routing.module';

import { TClassPage } from './t-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TClassPageRoutingModule
  ],
  declarations: [TClassPage]
})
export class TClassPageModule {}
