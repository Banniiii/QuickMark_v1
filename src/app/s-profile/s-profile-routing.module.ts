import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SProfilePage } from './s-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SProfilePageRoutingModule {}
