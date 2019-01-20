import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'read/:id', component: ArticleReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
