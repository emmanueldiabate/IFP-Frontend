import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProjetsPage } from './detail-projets.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProjetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProjetsPageRoutingModule {}
