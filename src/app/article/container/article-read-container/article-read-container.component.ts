import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

import { selectArticle } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { GetArticle, PostArticle } from '../../store/actions/article.actions';
import { IAppState } from './../../../store/state/app.state';
import { selectConfig } from './../../../core/store/selectors/config.selector';
import { GetConfig, PostConfig } from './../../../core/store/actions/config.actions';
import { ConfigEntity } from '../../../core/shared/entity/config.entity';
import { ArticleEntity } from './../../shared/entity/article.entity';

@Component({
  selector: 'app-article-read-container',
  templateUrl: './article-read-container.component.html',
  styleUrls: ['./article-read-container.component.scss']
})
export class ArticleReadContainerComponent implements OnInit {

  article$ = this._storeArticle.pipe(select(selectArticle));
  config$ = this._storeApp.pipe(select(selectConfig));

  constructor(
    private _storeArticle: Store<IArticleState>,
    private _storeApp: Store<IAppState>,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _location: Location
  ) { }

  ngOnInit() {
    this._storeArticle.dispatch(new GetArticle(this._route.snapshot.params.id));
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

  archive() {
    this._toastr.success('Item arquivado');
    this.back();
  }

  favorite() {

  }
}
