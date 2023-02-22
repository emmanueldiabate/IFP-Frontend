import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterProjetPage } from './ajouter-projet.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterProjetPageRoutingModule {}
