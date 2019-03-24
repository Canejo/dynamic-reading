import { ConfigActions, EConfigActions } from '../actions/config.actions';
import { initialConfigState, IConfigState } from '../state/config.state';

export function configReducers(
  state: IConfigState = initialConfigState,
  action: ConfigActions) {
    switch (action.type) {
      case EConfigActions.GetConfigSuccess: {
        return {
          ...state,
          config: action.payload
        };
      }
      case EConfigActions.PostConfigSuccess: {
        return {
          ...state,
          config: action.payload
        };
      }
      default:
        return state;
    }
}

// export const configReducers = (
//   state = initialConfigState,
//   action: ConfigActions
// ): IConfigState => {
//   switch (action.type) {
//     case EConfigActions.GetConfigSuccess: {
//       return {
//         ...state,
//         config: action.payload
//       };
//     }
//     case EConfigActions.PostConfigSuccess: {
//       return {
//         ...state,
//         config: action.payload
//       };
//     }
//     default:
//       return state;
//   }
// };
