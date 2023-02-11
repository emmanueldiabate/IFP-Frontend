import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
     // {
  //   path: 'accueil',
  //   loadChildren: () => import('../Accueil/tab1.module').then(m => m.Tab1PageModule)
  // },
  // {
  //   path: 'explication-projet',
  //   loadChildren: () => import('../explication-projet/explication-projet.module').then(m => m.ExplicationProjetPageModule)
  // },
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
