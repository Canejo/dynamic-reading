import { ConfigEntity } from '../../shared/entity/config.entity';

export interface IConfigState {
  config: ConfigEntity;
}

export const initialConfigState: IConfigState = {
  config: null
};
