import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IArticleState } from '../../store/state/article.state';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { ArticleListBaseContainerComponent } from '../article-list-base-container/article-list-base-container.component';
import { ModalContentService } from './../../../layout/component/modal-content/service/modal-content.service';
import { ICoreState } from './../../../core/store/state/core.state';

@Component({
  selector: 'app-article-archive-container',
  templateUrl: './article-archive-container.component.html',
  styleUrls: ['./article-archive-container.component.scss']
})
export class ArticleArchiveContainerComponent extends ArticleListBaseContainerComponent {

  constructor(
    storeArticle: Store<IArticleState>,
    modalContentService: ModalContentService,
    storeCore: Store<ICoreState>,
    router: Router
  ) {
    super(storeArticle, modalContentService, storeCore, router);
  }

  getFilter(): ArticleEntity {
    const filter = new ArticleEntity();
    filter.archive = true;
    return filter;
  }
}
