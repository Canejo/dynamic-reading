import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginContainerComponent } from './container/user-login-container/user-login-container.component';
import { GoogleSuccessContainerComponent } from './container/google-success-container/google-success-container.component';
import { UserManagerContainerComponent } from './container/user-manager-container/user-manager-container.component';
import { MasterPageContainerComponent } from '../layout/container/master-page-container/master-page-container.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginContainerComponent },
  { path: 'user/google-success', component: GoogleSuccessContainerComponent },
  {
    path: '',
    component: MasterPageContainerComponent,
    children: [
      { path: 'user/manager', component: UserManagerContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
