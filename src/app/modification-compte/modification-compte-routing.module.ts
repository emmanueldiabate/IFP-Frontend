import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificationComptePage } from './modification-compte.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificationComptePageRoutingModule {}
