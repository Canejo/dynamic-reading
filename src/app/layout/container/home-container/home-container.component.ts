import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IUserState } from './../../../user/store/state/user.state';
import { selectUser } from './../../../user/store/selectors/user.selector';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  userState$ = this._storeUser.pipe(select(selectUser));

  constructor(
    private _storeUser: Store<IUserState>
  ) { }

  ngOnInit() {
  }

}
