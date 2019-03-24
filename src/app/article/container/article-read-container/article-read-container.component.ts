import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { selectArticle } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { GetArticle, PostArticle } from '../../store/actions/article.actions';
import { IAppState } from './../../../store/state/app.state';
import { selectConfig } from '../../../core/store/selectors/core.selector';
import { GetConfig, PostConfig } from '../../../core/store/actions/core.actions';
import { ConfigEntity } from '../../../core/shared/entity/config.entity';
import { ArticleEntity } from './../../shared/entity/article.entity';
import { ArticleBaseContainerComponent } from '../article-base-container/article-base-container.component';
import { ModalContentService } from './../../../layout/component/modal-content/service/modal-content.service';

@Component({
  selector: 'app-article-read-container',
  templateUrl: './article-read-container.component.html',
  styleUrls: ['./article-read-container.component.scss']
})
export class ArticleReadContainerComponent extends ArticleBaseContainerComponent implements OnInit {

  article$ = this.storeArticle.pipe(select(selectArticle));
  config$ = this._storeApp.pipe(select(selectConfig));

  constructor(
    storeArticle: Store<IArticleState>,
    modalContentService: ModalContentService,
    private _storeApp: Store<IAppState>,
    private _route: ActivatedRoute,
    private _location: Location
  ) {
    super(storeArticle, modalContentService);
  }

  ngOnInit() {
    this.storeArticle.dispatch(new GetArticle(this._route.snapshot.params.id));
    this._storeApp.dispatch(new GetConfig());
  }

  pause(article: ArticleEntity) {
    this._storeApp.dispatch(new PostArticle(article));
  }

  changeSpeed(speed: number) {
    const configEntity = new ConfigEntity();
    configEntity.speedRead = speed;
    this._storeApp.dispatch(new PostConfig(configEntity));
  }

  back() {
    this._location.back();
  }

  posArchive(article: ArticleEntity): void {
    this.back();
  }

  posRemove(article: ArticleEntity): void {
    this.back();
  }
}
