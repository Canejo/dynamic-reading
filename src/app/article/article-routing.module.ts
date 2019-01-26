import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListContainerComponent } from './container/article-list-container/article-list-container.component';
import { ArticleReadContainerComponent } from './container/article-read-container/article-read-container.component';

const routes: Routes = [
  { path: '', component: ArticleListContainerComponent },
  { path: 'read/:id', component: ArticleReadContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
