import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContainerComponent } from './layout/container/home-container/home-container.component';
import { MasterPageContainerComponent } from './layout/container/master-page-container/master-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageContainerComponent,
    children: [
      { path: '', component: HomeContainerComponent },
      { path: 'article', loadChildren: './article/article.module#ArticleModule', data: { preload: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
