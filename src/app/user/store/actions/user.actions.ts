import { Action } from '@ngrx/store';
import { UserEntity } from './../../shared/entity/user.entity';

export enum EUserActions {
  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginSuccessAndRedirect = '[User] Login Success and redirect',
  LoginFailure = '[User] Login Failure',
  Signup = '[User] Signup',
  SignupSuccess = '[User] Signup Success',
  SignupFailure = '[User] Signup Failure',
  Logout = '[User] Logout',
  GetStatus = '[User] GetStatus'
}

export class LogIn implements Action {
  readonly type = EUserActions.Login;
  constructor(public payload: UserEntity) {}
}

export class LogInSuccess implements Action {
  readonly type = EUserActions.LoginSuccess;
  constructor(public payload: UserEntity) {}
}

export class LogInSuccessAndRedirect implements Action {
  readonly type = EUserActions.LoginSuccessAndRedirect;
  constructor(public payload: UserEntity) {}
}

export class LogInFailure implements Action {
  readonly type = EUserActions.LoginFailure;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = EUserActions.Signup;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = EUserActions.SignupSuccess;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = EUserActions.SignupFailure;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = EUserActions.Logout;
}

export class GetStatus implements Action {
  readonly type = EUserActions.GetStatus;
}

export type UserActions =
  | LogIn
  | LogInSuccess
  | LogInSuccessAndRedirect
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
  | GetStatus;
