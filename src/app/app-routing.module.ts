import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-projets',
    loadChildren: () => import('./detail-projets/detail-projets.module').then( m => m.DetailProjetsPageModule)
  },
  {
    path: 'projet-entier',
    loadChildren: () => import('./projet-entier/projet-entier.module').then( m => m.ProjetEntierPageModule)
  },
  {
    path: 'projet-entier',
    loadChildren: () => import('./projet-entier/projet-entier.module').then( m => m.ProjetEntierPageModule)
  },
  {
    path: 'modification-compte',
    loadChildren: () => import('./modification-compte/modification-compte.module').then( m => m.ModificationComptePageModule)
  },
  {
    path: 'ajouter-projet',
    loadChildren: () => import('./ajouter-projet/ajouter-projet.module').then( m => m.AjouterProjetPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mode-passe-oublier',
    loadChildren: () => import('./mot-de-passe-oublier/mode-passe-oublier.module').then( m => m.ModePasseOublierPageModule)
  },
  {
    path: 'mode-passe-incorrete',
    loadChildren: () => import('./mode-passe-incorrete/mode-passe-incorrete.module').then( m => m.ModePasseIncorretePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
