import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SSigninPage } from './s-signin.page';

const routes: Routes = [
  {
    path: '',
    component: SSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SSigninPageRoutingModule {}
