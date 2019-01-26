import { Action } from '@ngrx/store';
import { ConfigEntity } from '../../shared/entity/config.entity';

export enum EConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
  PostConfig= '[Config] Post Config',
  PostConfigSuccess = '[Config] Post Config Success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: ConfigEntity) {}
}

export class PostConfig implements Action {
  public readonly type = EConfigActions.PostConfig;
  constructor(public payload: ConfigEntity) {}
}

export class PostConfigSuccess implements Action {
  public readonly type = EConfigActions.PostConfigSuccess;
  constructor(public payload: ConfigEntity) {}
}

export type ConfigActions =
  | GetConfig
  | GetConfigSuccess
  | PostConfig
  | PostConfigSuccess;
