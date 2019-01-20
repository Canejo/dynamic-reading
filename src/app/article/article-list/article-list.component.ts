import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './../../store/state/app.state';
import { GetArticles } from './../../store/actions/article.actions';
import { selectArticleList } from './../../store/selectors/article.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$ = this._store.pipe(select(selectArticleList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetArticles());
  }

  navigateToArticle(id: number) {
    this._router.navigate(['/article/read', id]);
  }

}
