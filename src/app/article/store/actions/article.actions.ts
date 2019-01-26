import { Action } from '@ngrx/store';
import { ArticleEntity } from '../../shared/entity/article.entity';

export enum EArticleActions {
  GetArticles = '[Article] Get Articles',
  GetArticlesSuccess = '[Article] Get Articles Success',
  GetArticle = '[Article] Get Article',
  GetArticleSuccess = '[Article] Get Article Success',
  PostArticle = '[Article] Post Article',
  PostArticleSuccess = '[Article] Post Article Success'
}

export class GetArticles implements Action {
  public readonly type = EArticleActions.GetArticles;
  constructor(public payload?: ArticleEntity) {}
}

export class GetArticlesSuccess implements Action {
  public readonly type = EArticleActions.GetArticlesSuccess;
  constructor(public payload: ArticleEntity[]) {}
}

export class GetArticle implements Action {
  public readonly type = EArticleActions.GetArticle;
  constructor(public payload: number) {}
}

export class GetArticleSuccess implements Action {
  public readonly type = EArticleActions.GetArticleSuccess;
  constructor(public payload: ArticleEntity) {}
}

export class PostArticle implements Action {
  public readonly type = EArticleActions.PostArticle;
  constructor(public payload: ArticleEntity) {}
}

export class PostArticleSuccess implements Action {
  public readonly type = EArticleActions.PostArticleSuccess;
  constructor(public payload: ArticleEntity) {}
}

export type ArticleActions = GetArticles | GetArticlesSuccess | GetArticle | GetArticleSuccess | PostArticle | PostArticleSuccess;
