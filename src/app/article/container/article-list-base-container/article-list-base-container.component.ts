import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { selectArticleList } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { GetArticles } from '../../store/actions/article.actions';
import { selectConfig } from '../../../core/store/selectors/core.selector';
import { GetConfig } from '../../../core/store/actions/core.actions';
import { ArticleBaseContainerComponent } from '../article-base-container/article-base-container.component';
import { ModalContentService } from './../../../layout/component/modal-content/service/modal-content.service';
import { ICoreState } from './../../../core/store/state/core.state';

export abstract class ArticleListBaseContainerComponent extends ArticleBaseContainerComponent implements OnInit {

  articles$ = this.storeArticle.pipe(select(selectArticleList));
  config$ = this._storeCore.pipe(select(selectConfig));

  abstract getFilter(): ArticleEntity;

  constructor(
    storeArticle: Store<IArticleState>,
    modalContentService: ModalContentService,
    private _storeCore: Store<ICoreState>,
    private _router: Router
  ) {
    super(storeArticle, modalContentService);
  }

  ngOnInit() {
    const filter = this.getFilter();
    this.storeArticle.dispatch(new GetArticles(filter));
    this._storeCore.dispatch(new GetConfig());
  }

  navigateToArticle(article: ArticleEntity) {
    this._router.navigate(['/article/read', article.id]);
  }

  posArchive(article: ArticleEntity): void {

  }

  posRemove(article: ArticleEntity): void {

  }
}
