import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IUserState } from '../../store/state/user.state';
import { LogInSuccessAndRedirect } from './../../store/actions/user.actions';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-google-success-container',
  templateUrl: './google-success-container.component.html',
  styleUrls: ['./google-success-container.component.scss']
})
export class GoogleSuccessContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _storeUser: Store<IUserState>,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tokenValue = params['Token'];
      if (tokenValue) {
        const userEntity = this._userService.tokenToUserEntity(atob(tokenValue));
        this._storeUser.dispatch(new LogInSuccessAndRedirect(userEntity));
      }
    });
  }

}
