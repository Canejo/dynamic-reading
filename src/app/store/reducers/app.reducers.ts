import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { configReducers } from './../../core/store/reducers/config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  config: configReducers
};
