import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { selectArticleList } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { GetArticles } from '../../store/actions/article.actions';
import { selectConfig } from './../../../core/store/selectors/config.selector';
import { IAppState } from '../../../store/state/app.state';
import { GetConfig } from './../../../core/store/actions/config.actions';

export abstract class ArticleBaseContainerComponent implements OnInit {

  articles$ = this._storeArticle.pipe(select(selectArticleList));
  config$ = this._storeApp.pipe(select(selectConfig));

  abstract getFilter(): ArticleEntity;

  constructor(
    private _storeArticle: Store<IArticleState>,
    private _storeApp: Store<IAppState>,
    private _router: Router
  ) {
  }

  ngOnInit() {
    const filter = this.getFilter();
    this._storeArticle.dispatch(new GetArticles(filter));
    this._storeApp.dispatch(new GetConfig());
  }

  navigateToArticle(article: ArticleEntity) {
    this._router.navigate(['/article/read', article.id]);
  }

}
