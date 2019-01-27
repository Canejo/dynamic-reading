import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderContainerComponent } from './container/header-container/header-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HomeContainerComponent,
    HomeComponent,
    HeaderContainerComponent
  ],
  exports: [
    HeaderContainerComponent
  ]
})
export class LayoutModule { }
