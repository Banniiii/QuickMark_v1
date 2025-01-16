import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TAttendancePageRoutingModule } from './t-attendance-routing.module';

import { TAttendancePage } from './t-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TAttendancePageRoutingModule
  ],
  declarations: [TAttendancePage]
})
export class TAttendancePageModule {}
