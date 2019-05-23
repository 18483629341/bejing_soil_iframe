import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotBaseInfoPage } from './plot-base-info.page';



const routes: Routes = [
  {
    path: '',
    component: PlotBaseInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotBaseInfoPage]
})
export class PlotBaseInfoPageModule {}
