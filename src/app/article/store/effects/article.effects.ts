import { IArticleState } from './../state/article.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { GetArticle, EArticleActions, GetArticleSuccess, GetArticles, GetArticlesSuccess } from '../actions/article.actions';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { ArticleService } from '../../shared/service/article.service';

@Injectable()
export class ArticleEffects {
  @Effect()
  getArticle$ = this._actions$.pipe(
    ofType<GetArticle>(EArticleActions.GetArticle),
    map(action => action.payload),
    switchMap((id: number) => this._articleService.getArticle(id)),
    switchMap((article: ArticleEntity) => of(new GetArticleSuccess(article)))
  );

  @Effect()
  getArticles$ = this._actions$.pipe(
    ofType<GetArticles>(EArticleActions.GetArticles),
    switchMap(() => this._articleService.getArticles()),
    switchMap((articles: ArticleEntity[]) => of(new GetArticlesSuccess(articles)))
  );

  constructor(
    private _articleService: ArticleService,
    private _actions$: Actions,
    private _store: Store<IArticleState>
  ) {}
}
