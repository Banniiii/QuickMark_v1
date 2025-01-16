import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TAttendancePage } from './t-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: TAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TAttendancePageRoutingModule {}
