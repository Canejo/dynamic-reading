import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { LogIn, LogInSuccess, LogOut, LogInSuccessAndRedirect } from '../actions/user.actions';
import { UserService } from '../../shared/service/user.service';
import { EUserActions } from '../actions/user.actions';


@Injectable()
export class UserEffects {

  @Effect()
  logIn$ = this._actions$.pipe(
    ofType<LogIn>(EUserActions.Login),
    map(action => action.payload),
    switchMap((user) => this._userService.logIn(user)),
    switchMap((user) => of(new LogInSuccess(user)))
  );

  @Effect({ dispatch: false })
  logInSuccess$ = this._actions$.pipe(
    ofType<LogInSuccess>(EUserActions.LoginSuccess),
    switchMap((user) => this._localStorage.setItem('token', user.payload.token))
  );

  @Effect({ dispatch: false })
  logInSuccessAndRedirect$ = this._actions$.pipe(
    ofType<LogInSuccessAndRedirect>(EUserActions.LoginSuccessAndRedirect),
    switchMap((user) => of(new LogInSuccess(user.payload))),
    map(() => {
      this.router.navigateByUrl('/article');
    })
  );

  @Effect({ dispatch: false })
  logOut$ = this._actions$.pipe(
    ofType<LogOut>(EUserActions.Logout),
    switchMap(() => this._localStorage.removeItem('token'))
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _localStorage: LocalStorage,
    private router: Router
  ) {}
}
