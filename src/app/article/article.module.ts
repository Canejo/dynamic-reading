import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ReadRunnerComponent } from './shared/widget/read-runner/read-runner.component';
import { ArticleRoutingModule } from './article-routing.module';
import { TimeToCompletePipe } from './shared/pipe/time-to-complete.pipe';
import { ArticleTextService } from './shared/service/article-text.service';
import { ArticleEffects } from './store/effects/article.effects';
import { articleReducers } from './store/reducers/article.reducers';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleListContainerComponent } from './container/article-list-container/article-list-container.component';
import { ArticleReadContainerComponent } from './container/article-read-container/article-read-container.component';
import { ArticleReadComponent } from './component/article-read/article-read.component';
import { ArticleContainerComponent } from './container/article-container/article-container.component';
import { ArticleFavoriteContainerComponent } from './container/article-favorite-container/article-favorite-container.component';
import { ArticleArchiveContainerComponent } from './container/article-archive-container/article-archive-container.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([ArticleEffects])
  ],
  declarations: [
    ReadRunnerComponent,
    ArticleReadComponent,
    TimeToCompletePipe,
    ArticleListComponent,
    ArticleListContainerComponent,
    ArticleReadContainerComponent,
    ArticleContainerComponent,
    ArticleFavoriteContainerComponent,
    ArticleArchiveContainerComponent
  ],
  exports: [
  ],
  providers: [
    ArticleTextService
  ]
})
export class ArticleModule { }
