import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { EConfigActions, GetConfig, GetConfigSuccess, PostConfig, PostConfigSuccess } from '../actions/config.actions';
import { ConfigEntity } from '../../shared/entity/config.entity';
import { ConfigService } from '../../shared/service/config.service';
import { IAppState } from './../../../store/state/app.state';
import { selectConfig } from '../selectors/config.selector';


@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    withLatestFrom(
      this._store.select(selectConfig),
      (action: any, store: any) => store
    ),
    switchMap((config): any => {
      if (config) {
        return of(config);
      }
      return this._configService.getConfig();
     }),
    //switchMap(() => this._configService.getConfig()),
    switchMap((config: ConfigEntity) => of(new GetConfigSuccess(config)))
  );

  @Effect()
  postConfig$ = this._actions$.pipe(
    ofType<PostConfig>(EConfigActions.PostConfig),
    map(action => action.payload),
    switchMap((configEntity) => this._configService.postConfig(configEntity)),
    switchMap((config: ConfigEntity) => of(new PostConfigSuccess(config)))
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions,
    private _store: Store<IAppState>
    ) {}
}
