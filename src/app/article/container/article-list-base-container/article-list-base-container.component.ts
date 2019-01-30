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
import { ArticleBaseContainerComponent } from '../article-base-container/article-base-container.component';
import { ModalContentService } from './../../../layout/component/modal-content/service/modal-content.service';

export abstract class ArticleListBaseContainerComponent extends ArticleBaseContainerComponent implements OnInit {

  articles$ = this.storeArticle.pipe(select(selectArticleList));
  config$ = this._storeApp.pipe(select(selectConfig));

  abstract getFilter(): ArticleEntity;

  constructor(
    storeArticle: Store<IArticleState>,
    modalContentService: ModalContentService,
    private _storeApp: Store<IAppState>,
    private _router: Router
  ) {
    super(storeArticle, modalContentService);
  }

  ngOnInit() {
    const filter = this.getFilter();
    this.storeArticle.dispatch(new GetArticles(filter));
    this._storeApp.dispatch(new GetConfig());
  }

  navigateToArticle(article: ArticleEntity) {
    this._router.navigate(['/article/read', article.id]);
  }

  posArchive(article: ArticleEntity): void {

  }

  posRemove(article: ArticleEntity): void {

  }
}
