import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../Accueil/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'explication-projet',
        loadChildren: () => import('../explication-projet/explication-projet.module').then(m => m.ExplicationProjetPageModule)
      }, 
      {
        path: 'detail-projets/:id',
        loadChildren: () => import('../detail-projets/detail-projets.module').then(m => m.DetailProjetsPageModule)
      },
      {
        path: 'projet-entier',
        loadChildren: () => import('../projet-entier/projet-entier.module').then(m => m.ProjetEntierPageModule)
      },
      {
        path: 'modification-compte',
        loadChildren: () => import('../modification-compte/modification-compte.module').then(m => m.ModificationComptePageModule)
      },
      // {
      //   path: 'connexion',
      //   loadChildren: () => import('../connexion/connexion.module').then(m => m.ConnexionPageModule)
      // },
      // {
      //   path: 'inscription',
      //   loadChildren: () => import('../inscription/inscription.module').then(m => m.InscriptionPageModule)
      // },
      {
        path: 'ajouter-projet',
        loadChildren: () => import('../ajouter-projet/ajouter-projet.module').then(m => m.AjouterProjetPageModule)
      },
      
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
