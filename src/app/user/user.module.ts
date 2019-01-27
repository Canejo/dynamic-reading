import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginContainerComponent } from './container/user-login-container/user-login-container.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserLoginContainerComponent,
    UserLoginComponent
  ]
})
export class UserModule { }
