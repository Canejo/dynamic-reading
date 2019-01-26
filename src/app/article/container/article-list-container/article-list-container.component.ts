import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { IAppState } from '../../../store/state/app.state';
import { ArticleBaseContainerComponent } from '../article-base-container/article-base-container.component';

@Component({
  selector: 'app-article-list-container',
  templateUrl: './article-list-container.component.html',
  styleUrls: ['./article-list-container.component.scss']
})
export class ArticleListContainerComponent extends ArticleBaseContainerComponent {

  constructor(
    storeArticle: Store<IArticleState>,
    storeApp: Store<IAppState>,
    router: Router
  ) {
    super(storeArticle, storeApp, router);
  }

  getFilter(): ArticleEntity {
    const filter = new ArticleEntity();
    filter.archive = false;
    return filter;
  }

}
