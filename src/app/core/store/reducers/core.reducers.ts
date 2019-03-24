import { CoreActions, ECoreActions } from '../actions/core.actions';
import { initialConfigState, ICoreState } from '../state/core.state';

export function coreReducers(
  state: ICoreState = initialConfigState,
  action: CoreActions) {
    switch (action.type) {
      case ECoreActions.GetConfigSuccess: {
        return {
          ...state,
          config: action.payload
        };
      }
      case ECoreActions.PostConfigSuccess: {
        return {
          ...state,
          config: action.payload
        };
      }
      case ECoreActions.GetSystemConfigSuccess: {
        return {
          ...state,
          systemConfig: action.payload
        };
      }
      default:
        return state;
    }
}
