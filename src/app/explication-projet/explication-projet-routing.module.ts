import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplicationProjetPage } from './explication-projet.page';

const routes: Routes = [
  {
    path: '',
    component: ExplicationProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplicationProjetPageRoutingModule {}
