import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IArticleState } from '../state/article.state';

const selectArticles = (state: IAppState) => state.articles;

export const selectArticleList = createSelector(
  selectArticles,
  (state: IArticleState) => state.articles
);

export const selectSelectedArticle = createSelector(
  selectArticles,
  (state: IArticleState) => state.selectedArticle
);
