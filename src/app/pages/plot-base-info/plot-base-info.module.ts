import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotBaseInfoPage } from './plot-base-info.page';
import { GenPositionStrPipe } from "src/app/pipe/gen-position-str.pipe";


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
  declarations: [PlotBaseInfoPage,GenPositionStrPipe],
  exports:[GenPositionStrPipe]
})
export class PlotBaseInfoPageModule {}
