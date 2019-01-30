import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginContainerComponent } from './container/user-login-container/user-login-container.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { GoogleSuccessContainerComponent } from './container/google-success-container/google-success-container.component';
import { userReducers } from './store/reducers/user.reducers';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducers),
    EffectsModule.forFeature([UserEffects]),
    NgbModule
  ],
  declarations: [
    UserLoginContainerComponent,
    UserLoginComponent,
    GoogleSuccessContainerComponent
  ]
})
export class UserModule { }
