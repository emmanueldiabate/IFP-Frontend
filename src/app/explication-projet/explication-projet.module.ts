import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplicationProjetPageRoutingModule } from './explication-projet-routing.module';

import { ExplicationProjetPage } from './explication-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplicationProjetPageRoutingModule
  ],
  declarations: [ExplicationProjetPage]
})
export class ExplicationProjetPageModule {}
