import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 't-signup',
    loadChildren: () => import('./t-signup/t-signup.module').then( m => m.TSignupPageModule)
  },
  {
    path: 's-signup',
    loadChildren: () => import('./s-signup/s-signup.module').then( m => m.SSignupPageModule)
  },
  {
    path: 't-signin',
    loadChildren: () => import('./t-signin/t-signin.module').then( m => m.TSigninPageModule)
  },
  {
    path: 't-home',
    loadChildren: () => import('./t-home/t-home.module').then( m => m.THomePageModule)
  },
  {
    path: 't-class',
    loadChildren: () => import('./t-class/t-class.module').then( m => m.TClassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
