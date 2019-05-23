import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotLatesupervisionRecordPage } from './plot-latesupervision-record.page';

const routes: Routes = [
  {
    path: '',
    component: PlotLatesupervisionRecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotLatesupervisionRecordPage]
})
export class PlotLatesupervisionRecordPageModule {}
