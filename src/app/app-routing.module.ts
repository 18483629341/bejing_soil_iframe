import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  }, // 默认加载页面
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'inspection-record', loadChildren: './pages/inspection-record/inspection-record.module#InspectionRecordPageModule' },
  { path: 'plot-detail', loadChildren: './pages/plot-detail/plot-detail.module#PlotDetailPageModule' },
  { path: 'plot-primary-research', loadChildren: './pages/plot-primary-research/plot-primary-research.module#PlotPrimaryResearchPageModule' },
  { path: 'plot-detail-research', loadChildren: './pages/plot-detail-research/plot-detail-research.module#PlotDetailResearchPageModule' },
  { path: 'plot-risk-assessment', loadChildren: './pages/plot-risk-assessment/plot-risk-assessment.module#PlotRiskAssessmentPageModule' },
  { path: 'plot-risk-management', loadChildren: './pages/plot-risk-management/plot-risk-management.module#PlotRiskManagementPageModule' },
  { path: 'plot-gover-repair', loadChildren: './pages/plot-gover-repair/plot-gover-repair.module#PlotGoverRepairPageModule' },
  { path: 'plot-effect-evaluation', loadChildren: './pages/plot-effect-evaluation/plot-effect-evaluation.module#PlotEffectEvaluationPageModule' },
  { path: 'plot-liveinspection-record', loadChildren: './pages/plot-liveinspection-record/plot-liveinspection-record.module#PlotLiveinspectionRecordPageModule' },
  { path: 'plot-liveinspection-detail', loadChildren: './pages/plot-liveinspection-detail/plot-liveinspection-detail.module#PlotLiveinspectionDetailPageModule' },
  { path: 'plot-base-info', loadChildren: './pages/plot-base-info/plot-base-info.module#PlotBaseInfoPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesPageModule' },
  { path: 'downloaded', loadChildren: './pages/downloaded/downloaded.module#DownloadedPageModule' },
  { path: 'set-up', loadChildren: './pages/set-up/set-up.module#SetUpPageModule' },
  { path: 'skin-set', loadChildren: './pages/skin-set/skin-set.module#SkinSetPageModule' },
  { path: 'edit-img', loadChildren: './pages/edit-img/edit-img.module#EditImgPageModule' },
  { path: 'plot-latesupervision-detail', loadChildren: './pages/plot-latesupervision-detail/plot-latesupervision-detail.module#PlotLatesupervisionDetailPageModule' },
  { path: 'plot-latesupervision-record', loadChildren: './pages/plot-latesupervision-record/plot-latesupervision-record.module#PlotLatesupervisionRecordPageModule' },
  { path: 'edit-photo', loadChildren: './pages/edit-photo/edit-photo.module#EditPhotoPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
