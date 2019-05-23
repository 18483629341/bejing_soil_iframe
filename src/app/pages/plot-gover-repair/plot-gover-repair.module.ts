import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotGoverRepairPage } from './plot-gover-repair.page';

const routes: Routes = [
  {
    path: '',
    component: PlotGoverRepairPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotGoverRepairPage]
})
export class PlotGoverRepairPageModule {}
