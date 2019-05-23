import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotRiskAssessmentPage } from './plot-risk-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: PlotRiskAssessmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotRiskAssessmentPage]
})
export class PlotRiskAssessmentPageModule {}
