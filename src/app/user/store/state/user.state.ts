import { UserEntity } from '../../shared/entity/user.entity';

export interface IUserState {
  isAuthenticated: boolean;
  user: UserEntity | null;
  errorMessage: string | null;
}

export const initialUserState: IUserState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};
