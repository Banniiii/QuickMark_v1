import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TSigninPage } from './t-signin.page';

const routes: Routes = [
  {
    path: '',
    component: TSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSigninPageRoutingModule {}
