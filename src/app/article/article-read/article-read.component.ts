import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { selectArticle } from '../store/selectors/article.selector';
import { GetArticle } from '../store/actions/article.actions';
import { IArticleState } from '../store/state/article.state';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.scss']
})
export class ArticleReadComponent implements OnInit {

  article$ = this._store.pipe(select(selectArticle));

  constructor(
    private _store: Store<IArticleState>,
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
