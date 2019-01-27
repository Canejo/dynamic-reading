import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginContainerComponent } from './container/user-login-container/user-login-container.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
