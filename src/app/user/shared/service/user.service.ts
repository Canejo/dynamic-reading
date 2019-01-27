import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../../environments/environment';
import { UserEntity } from '../entity/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _helper = new JwtHelperService();

  constructor() { }

  getUrlAuthGoogle(): string {
    return `${environment.apiUrl}/AccountGoogle/signInWithGoogle`;
  }

  logIn(payload: UserEntity): Observable<UserEntity> {
    return of(payload);
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
