import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectUser } from './../../../user/store/selectors/user.selector';
import { IUserState } from './../../../user/store/state/user.state';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  userState$ = this._storeUser.pipe(select(selectUser));

  constructor(
    private _storeUser: Store<IUserState>
  ) { }

  ngOnInit() {
  }

}
