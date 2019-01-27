import { Injectable } from '@angular/core';
import { UserEntity } from '../entity/user.entity';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _helper = new JwtHelperService();

  constructor() { }

  getUrlAuthGoogle(): string {
    return 'https://localhost:44349' + '/AccountGoogle/signInWithGoogle';
  }

  logIn(payload: UserEntity): Observable<UserEntity> {
    throw new Error("Method not implemented.");
  }

  tokenToUserEntity(tokenValue: string) {
    const userEntity = new UserEntity();
    userEntity.token = tokenValue;

    const token = this._helper.decodeToken(userEntity.token);
    userEntity.userName = token['unique_name'];
    userEntity.email = token['sub'];

    return userEntity;
  }
}
