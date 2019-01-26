import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListContainerComponent } from './container/article-list-container/article-list-container.component';
import { ArticleReadContainerComponent } from './container/article-read-container/article-read-container.component';
import { ArticleContainerComponent } from './container/article-container/article-container.component';
import { ArticleArchiveContainerComponent } from './container/article-archive-container/article-archive-container.component';
import { ArticleFavoriteContainerComponent } from './container/article-favorite-container/article-favorite-container.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleContainerComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ArticleListContainerComponent },
        { path: 'favorites', component: ArticleFavoriteContainerComponent },
        { path: 'archive', component: ArticleArchiveContainerComponent },
    ]
  },
  { path: 'read/:id', component: ArticleReadContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
