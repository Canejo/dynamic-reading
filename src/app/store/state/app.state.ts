import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState } from './../../core/store/state/config.state';
export interface IAppState {
  router?: RouterReducerState;
}
