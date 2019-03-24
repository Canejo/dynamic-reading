import { ConfigEntity } from '../../shared/entity/config.entity';
import { ISystemConfig } from '../../shared/entity/system-config.entity';

export interface ICoreState {
  config: ConfigEntity;
  systemConfig: ISystemConfig;
}

export const initialConfigState: ICoreState = {
  config: null,
  systemConfig: null
};
