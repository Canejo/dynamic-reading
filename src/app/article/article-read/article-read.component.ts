import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { selectSelectedArticle } from './../../store/selectors/article.selector';
import { IAppState } from './../../store/state/app.state';
import { GetArticle } from 'src/app/store/actions/article.actions';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.scss']
})
export class ArticleReadComponent implements OnInit {

  article$ = this._store.pipe(select(selectSelectedArticle));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetArticle(this._route.snapshot.params.id));
  }

  start() {
  }

  pause(indexWord: number) {
  }

  finish() {
  }
}
