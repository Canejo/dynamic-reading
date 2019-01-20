import { RouterReducerState } from '@ngrx/router-store';
import { IArticleState, initialArticleState } from './article.state';

export interface IAppState {
  router?: RouterReducerState;
  articles: IArticleState;
}

export const initialAppState: IAppState = {
  articles: initialArticleState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
