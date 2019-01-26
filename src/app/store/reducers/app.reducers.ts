import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { initialArticleState } from 'src/app/article/store/state/article.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer
};
