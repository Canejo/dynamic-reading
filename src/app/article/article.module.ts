import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

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
import { ArticleOptionsComponent } from './component/article-options/article-options.component';
import { ArticleTagModalComponent } from './container/article-tag-modal/article-tag-modal.component';
import { ArticleTagComponent } from './component/article-tag/article-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([ArticleEffects]),
    NgbModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
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
    ArticleArchiveContainerComponent,
    ArticleOptionsComponent,
    ArticleTagModalComponent,
    ArticleTagComponent
  ],
  entryComponents: [
    ArticleTagModalComponent
  ],
  exports: [
  ],
  providers: [
    ArticleTextService
  ]
})
export class ArticleModule { }
