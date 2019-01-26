import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectArticle } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { ActivatedRoute } from '@angular/router';
import { GetArticle } from '../../store/actions/article.actions';

@Component({
  selector: 'app-article-read-container',
  templateUrl: './article-read-container.component.html',
  styleUrls: ['./article-read-container.component.scss']
})
export class ArticleReadContainerComponent implements OnInit {

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
