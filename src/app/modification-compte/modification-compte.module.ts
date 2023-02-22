import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificationComptePageRoutingModule } from './modification-compte-routing.module';

import { ModificationComptePage } from './modification-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificationComptePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModificationComptePage]
})
export class ModificationComptePageModule {}
