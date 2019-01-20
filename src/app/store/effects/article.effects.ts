import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetArticle, EArticleActions, GetArticleSuccess, GetArticles, GetArticlesSuccess } from '../actions/article.actions';
import { ArticleService } from './../../article/shared/service/article.service';
import { ArticleEntity } from './../../article/shared/entity/article.entity';
import { selectArticleList } from '../selectors/article.selector';

@Injectable()
export class ArticleEffects {
  @Effect()
  getArticle$ = this._actions$.pipe(
    ofType<GetArticle>(EArticleActions.GetArticle),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectArticleList))),
    switchMap(([id, articles]) => {
      const selectedArticle = articles.filter(article => article.id === +id)[0];
      return of(new GetArticleSuccess(selectedArticle));
    })
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
    private _store: Store<IAppState>
  ) {}
}
