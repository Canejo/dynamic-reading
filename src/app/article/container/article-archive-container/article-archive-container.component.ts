import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { IAppState } from '../../../store/state/app.state';
import { ArticleListBaseContainerComponent } from '../article-list-base-container/article-list-base-container.component';

@Component({
  selector: 'app-article-archive-container',
  templateUrl: './article-archive-container.component.html',
  styleUrls: ['./article-archive-container.component.scss']
})
export class ArticleArchiveContainerComponent extends ArticleListBaseContainerComponent {

  constructor(
    storeArticle: Store<IArticleState>,
    storeApp: Store<IAppState>,
    router: Router
  ) {
    super(storeArticle, storeApp, router);
  }

  getFilter(): ArticleEntity {
    const filter = new ArticleEntity();
    filter.archive = true;
    return filter;
  }
}
