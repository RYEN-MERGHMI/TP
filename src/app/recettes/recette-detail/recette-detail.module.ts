import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteDetailPageRoutingModule } from './recette-detail-routing.module';

import { RecetteDetailPage } from './recette-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteDetailPageRoutingModule
  ],
  declarations: [RecetteDetailPage]
})
export class RecetteDetailPageModule {}
