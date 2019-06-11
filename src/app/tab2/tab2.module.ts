import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';
import { SearchModalModule } from '../../components/search-modal/search-modal.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchModalModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  entryComponents: [SearchModalComponent]
})
export class Tab2PageModule {}
