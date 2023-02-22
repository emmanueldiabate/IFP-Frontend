import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetEntierPageRoutingModule } from './projet-entier-routing.module';

import { ProjetEntierPage } from './projet-entier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetEntierPageRoutingModule
  ],
  declarations: [ProjetEntierPage]
})
export class ProjetEntierPageModule {}
