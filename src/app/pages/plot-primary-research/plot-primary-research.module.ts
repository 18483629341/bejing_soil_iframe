import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotPrimaryResearchPage } from './plot-primary-research.page';

const routes: Routes = [
  {
    path: '',
    component: PlotPrimaryResearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotPrimaryResearchPage]
})
export class PlotPrimaryResearchPageModule {}
