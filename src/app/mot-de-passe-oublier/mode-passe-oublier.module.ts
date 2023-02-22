import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModePasseOublierPageRoutingModule } from './mode-passe-oublier-routing.module';

import { ModePasseOublierPage } from './mode-passe-oublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModePasseOublierPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModePasseOublierPage]
})
export class ModePasseOublierPageModule {}
