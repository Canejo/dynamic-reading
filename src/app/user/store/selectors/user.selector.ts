import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';


export const selectUsers = createFeatureSelector<IUserState>('user');

export const selectUser = createSelector(
  selectUsers,
  (state: IUserState) => state
);
