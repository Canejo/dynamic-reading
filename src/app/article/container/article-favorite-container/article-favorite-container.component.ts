import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { IAppState } from '../../../store/state/app.state';
import { ArticleBaseContainerComponent } from '../article-base-container/article-base-container.component';

@Component({
  selector: 'app-article-favorite-container',
  templateUrl: './article-favorite-container.component.html',
  styleUrls: ['./article-favorite-container.component.scss']
})
export class ArticleFavoriteContainerComponent extends ArticleBaseContainerComponent {

  constructor(
    storeArticle: Store<IArticleState>,
    storeApp: Store<IAppState>,
    router: Router
  ) {
    super(storeArticle, storeApp, router);
  }

  getFilter(): ArticleEntity {
    const filter = new ArticleEntity();
    filter.favorite = true;
    filter.archive = false;
    return filter;
  }

}
