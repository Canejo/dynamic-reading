
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ICoreState } from '../state/core.state';

export const coreState = createFeatureSelector<ICoreState>('core');

export const selectConfig = createSelector(
  coreState,
  (state: ICoreState) => state.config
);

export const updateConfig = createSelector(
  coreState,
  (state: ICoreState) => state.config
);

export const selectSystemConfig = createSelector(
  coreState,
  (state: ICoreState) => state.systemConfig
);

