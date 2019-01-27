import { Component, OnInit, Input } from '@angular/core';

import { IUserState } from './../../../user/store/state/user.state';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userState: IUserState;
  navbarOpen = false;


  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
