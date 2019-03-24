import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export function userReducers(
  state: IUserState = initialUserState,
  action: UserActions) {
    switch (action.type) {
      case EUserActions.LoginSuccess: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            email: action.payload.email,
            userName: action.payload.userName
          },
          errorMessage: null
        };
      }
      case EUserActions.LoginSuccessAndRedirect: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            email: action.payload.email,
            userName: action.payload.userName
          },
          errorMessage: null
        };
      }
      case EUserActions.LoginFailure: {
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case EUserActions.SignupSuccess: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            email: action.payload.email,
            userName: action.payload.userName
          },
          errorMessage: null
        };
      }
      case EUserActions.SignupFailure: {
        return {
          ...state,
          errorMessage: 'That email is already in use.'
        };
      }
      case EUserActions.Logout: {
        return initialUserState;
      }
      default: {
        return state;
      }
    }
}

// export const userReducers = (
//   state = initialUserState,
//   action: UserActions
// ): IUserState => {
//   switch (action.type) {
//     case EUserActions.LoginSuccess: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email,
//           userName: action.payload.userName
//         },
//         errorMessage: null
//       };
//     }
//     case EUserActions.LoginSuccessAndRedirect: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email,
//           userName: action.payload.userName
//         },
//         errorMessage: null
//       };
//     }
//     case EUserActions.LoginFailure: {
//       return {
//         ...state,
//         errorMessage: 'Incorrect email and/or password.'
//       };
//     }
//     case EUserActions.SignupSuccess: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email,
//           userName: action.payload.userName
//         },
//         errorMessage: null
//       };
//     }
//     case EUserActions.SignupFailure: {
//       return {
//         ...state,
//         errorMessage: 'That email is already in use.'
//       };
//     }
//     case EUserActions.Logout: {
//       return initialUserState;
//     }
//     default: {
//       return state;
//     }
//   }
// };
