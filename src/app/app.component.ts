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
    private localStorage: LocalStorage,
    private userService: UserService,
    private storeUser: Store<IUserState>
  ) {
  }

  ngOnInit() {
    this.localStorage.getItem('token').subscribe((tokenValue: string) => {
      if (tokenValue) {
        const userEntity = this.userService.tokenToUserEntity(tokenValue);
        this.storeUser.dispatch(new LogInSuccess(userEntity));
      }
    });
  }
}
