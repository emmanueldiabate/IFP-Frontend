import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModePasseIncorretePageRoutingModule } from './mode-passe-incorrete-routing.module';

import { ModePasseIncorretePage } from './mode-passe-incorrete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModePasseIncorretePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModePasseIncorretePage]
})
export class ModePasseIncorretePageModule {}
