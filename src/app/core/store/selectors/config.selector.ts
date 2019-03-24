
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IConfigState } from '../state/config.state';

export const configState = createFeatureSelector<IConfigState>('core');

export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);


export const updateConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);
