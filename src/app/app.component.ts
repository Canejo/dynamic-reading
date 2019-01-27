import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Store } from '@ngrx/store';

import { UserService } from './user/shared/service/user.service';
import { LogInSuccess } from './user/store/actions/user.actions';
import { IUserState } from './user/store/state/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _localStorage: LocalStorage,
    private _userService: UserService,
    private _storeUser: Store<IUserState>
  ) {
  }

  ngOnInit() {
    this._localStorage.getItem('token').subscribe((tokenValue: string) => {
      if (tokenValue) {
        const userEntity = this._userService.tokenToUserEntity(tokenValue);
        this._storeUser.dispatch(new LogInSuccess(userEntity));
      }
    });

  }
}
