import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModePasseIncorretePage } from './mode-passe-incorrete.page';

const routes: Routes = [
  {
    path: '',
    component: ModePasseIncorretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModePasseIncorretePageRoutingModule {}
