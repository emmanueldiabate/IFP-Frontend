import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetEntierPage } from './projet-entier.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetEntierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetEntierPageRoutingModule {}
