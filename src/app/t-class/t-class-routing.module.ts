import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TClassPage } from './t-class.page';

const routes: Routes = [
  {
    path: '',
    component: TClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TClassPageRoutingModule {}
