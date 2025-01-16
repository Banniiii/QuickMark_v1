import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TProfilePage } from './t-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TProfilePageRoutingModule {}
