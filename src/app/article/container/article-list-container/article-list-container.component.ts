import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectArticleList } from '../../store/selectors/article.selector';
import { IArticleState } from '../../store/state/article.state';
import { Router } from '@angular/router';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { GetArticles } from '../../store/actions/article.actions';

@Component({
  selector: 'app-article-list-container',
  templateUrl: './article-list-container.component.html',
  styleUrls: ['./article-list-container.component.scss']
})
export class ArticleListContainerComponent implements OnInit {

  articles$ = this._store.pipe(select(selectArticleList));

  constructor(
    private _store: Store<IArticleState>,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetArticles());
  }

  navigateToArticle(article: ArticleEntity) {
    this._router.navigate(['/article/read', article.id]);
  }

}
