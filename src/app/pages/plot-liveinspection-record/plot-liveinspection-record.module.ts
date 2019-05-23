import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotLiveinspectionRecordPage } from './plot-liveinspection-record.page';

const routes: Routes = [
  {
    path: '',
    component: PlotLiveinspectionRecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotLiveinspectionRecordPage]
})
export class PlotLiveinspectionRecordPageModule {}
