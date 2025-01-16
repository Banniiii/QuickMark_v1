import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { THomePage } from './t-home.page';

const routes: Routes = [
  {
    path: '',
    component: THomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class THomePageRoutingModule {}
