import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderContainerComponent } from './container/header-container/header-container.component';
import { ButtonLoadingComponent } from './component/button-loading/button-loading.component';
import { ModalContentModule } from './component/modal-content/modal-content.module';
import { ButtonLoadingService } from './component/button-loading/service/button-loading.service';
import { MasterPageContainerComponent } from './container/master-page-container/master-page-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalContentModule
  ],
  declarations: [
    HeaderComponent,
    HomeContainerComponent,
    HomeComponent,
    HeaderContainerComponent,
    ButtonLoadingComponent,
    MasterPageContainerComponent
  ],
  providers: [
    ButtonLoadingService
  ],
  exports: [
    HeaderContainerComponent,
    ButtonLoadingComponent,
    ModalContentModule
  ]
})
export class LayoutModule { }
