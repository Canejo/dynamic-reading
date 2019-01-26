
import { createSelector } from '@ngrx/store';

import { IConfigState } from '../state/config.state';
import { IAppState } from '../../../store/state/app.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);


export const updateConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);
