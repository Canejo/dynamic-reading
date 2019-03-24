import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { ECoreActions, GetConfig, GetConfigSuccess, PostConfig, PostConfigSuccess,
  GetSystemConfig, GetSystemConfigSuccess } from '../actions/core.actions';
import { ConfigEntity } from '../../shared/entity/config.entity';
import { ConfigService } from '../../shared/service/config.service';
import { selectConfig, selectSystemConfig } from '../selectors/core.selector';
import { ISystemConfig } from '../../shared/entity/system-config.entity';
import { ICoreState } from '../state/core.state';


@Injectable()
export class CoreEffects {
  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(ECoreActions.GetConfig),
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
    ofType<PostConfig>(ECoreActions.PostConfig),
    map(action => action.payload),
    switchMap((configEntity) => this._configService.postConfig(configEntity)),
    switchMap((config: ConfigEntity) => of(new PostConfigSuccess(config)))
  );

  @Effect()
  getSystemConfig$ = this._actions$.pipe(
    ofType<GetSystemConfig>(ECoreActions.GetSystemConfig),
    withLatestFrom(
      this._store.select(selectSystemConfig),
      (action: any, store: any) => store
    ),
    switchMap((config): any => {
      if (config) {
        return of(config);
      }
      return this._configService.getSystemConfig();
     }),
    switchMap((config: ISystemConfig) => of(new GetSystemConfigSuccess(config)))
  );

  constructor(
    private _store: Store<ICoreState>,
    private _actions$: Actions,
    private _configService: ConfigService
    ) {}
}
