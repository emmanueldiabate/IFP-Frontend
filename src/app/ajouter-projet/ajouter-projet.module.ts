import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterProjetPageRoutingModule } from './ajouter-projet-routing.module';

import { AjouterProjetPage } from './ajouter-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterProjetPageRoutingModule
  ],
  declarations: [AjouterProjetPage]
})
export class AjouterProjetPageModule {}
