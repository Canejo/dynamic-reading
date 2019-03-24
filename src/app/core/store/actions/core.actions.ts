import { Action } from '@ngrx/store';
import { ConfigEntity } from '../../shared/entity/config.entity';
import { ISystemConfig } from '../../shared/entity/system-config.entity';

export enum ECoreActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
  PostConfig= '[Config] Post Config',
  PostConfigSuccess = '[Config] Post Config Success',
  GetSystemConfig = '[SystemConfig] Get Config',
  GetSystemConfigSuccess = '[SystemConfig] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = ECoreActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ECoreActions.GetConfigSuccess;
  constructor(public payload: ConfigEntity) {}
}

export class PostConfig implements Action {
  public readonly type = ECoreActions.PostConfig;
  constructor(public payload: ConfigEntity) {}
}

export class PostConfigSuccess implements Action {
  public readonly type = ECoreActions.PostConfigSuccess;
  constructor(public payload: ConfigEntity) {}
}

export class GetSystemConfig implements Action {
  public readonly type = ECoreActions.GetSystemConfig;
}

export class GetSystemConfigSuccess implements Action {
  public readonly type = ECoreActions.GetSystemConfigSuccess;
  constructor(public payload: ISystemConfig) {}
}

export type CoreActions =
  | GetConfig
  | GetConfigSuccess
  | PostConfig
  | PostConfigSuccess
  | GetSystemConfig
  | GetSystemConfigSuccess;
