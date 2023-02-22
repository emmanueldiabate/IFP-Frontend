import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProjetsPageRoutingModule } from './detail-projets-routing.module';

import { DetailProjetsPage } from './detail-projets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProjetsPageRoutingModule
  ],
  declarations: [DetailProjetsPage]
})
export class DetailProjetsPageModule {}
