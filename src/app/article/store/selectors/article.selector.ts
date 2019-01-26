import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IArticleState } from '../state/article.state';


export const selectArticles = createFeatureSelector<IArticleState>('article');

export const selectArticleList = createSelector(
  selectArticles,
  (state: IArticleState) => state.articles
);

export const selectArticle = createSelector(
  selectArticles,
  (state: IArticleState) => state.selectedArticle
);

export const updateArticle = createSelector(
  selectArticles,
  (state: IArticleState) => state.selectedArticle
);
