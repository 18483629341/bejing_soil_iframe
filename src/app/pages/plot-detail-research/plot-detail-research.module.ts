import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotDetailResearchPage } from './plot-detail-research.page';

const routes: Routes = [
  {
    path: '',
    component: PlotDetailResearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotDetailResearchPage]
})
export class PlotDetailResearchPageModule {}
