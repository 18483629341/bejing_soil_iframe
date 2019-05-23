import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotEffectEvaluationPage } from './plot-effect-evaluation.page';

const routes: Routes = [
  {
    path: '',
    component: PlotEffectEvaluationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotEffectEvaluationPage]
})
export class PlotEffectEvaluationPageModule {}
