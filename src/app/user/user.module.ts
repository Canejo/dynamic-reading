import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginContainerComponent } from './container/user-login-container/user-login-container.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgbModule
  ],
  declarations: [
    UserLoginContainerComponent,
    UserLoginComponent
  ]
})
export class UserModule { }
