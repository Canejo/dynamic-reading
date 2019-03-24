import { RouterReducerState } from '@ngrx/router-store';

import { ICoreState } from '../../core/store/state/core.state';
export interface IAppState {
  router?: RouterReducerState;
}
