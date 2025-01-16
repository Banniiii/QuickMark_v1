import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SSignupPage } from './s-signup.page';

const routes: Routes = [
  {
    path: '',
    component: SSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SSignupPageRoutingModule {}
