import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-user-login-container',
  templateUrl: './user-login-container.component.html',
  styleUrls: ['./user-login-container.component.scss']
})
export class UserLoginContainerComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  onGoogle() {
    this._document.location.href = this._userService.getUrlAuthGoogle();
  }

}
