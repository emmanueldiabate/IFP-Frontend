import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModePasseOublierPage } from './mode-passe-oublier.page';

const routes: Routes = [
  {
    path: '',
    component: ModePasseOublierPage
  },
  {
    path: 'mot-de-passe-oublier',
    loadChildren: () => import('./mot-de-passe-oublier.module').then( m => m.MotDePasseOublierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModePasseOublierPageRoutingModule {}
