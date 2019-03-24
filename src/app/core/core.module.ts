import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { coreReducers } from './store/reducers/core.reducers';
import { CoreEffects } from './store/effects/core.effects';
import { ConfigService } from './shared/service/config.service';
import { SystemGraphql } from './shared/graphql/query/system.graphql';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', coreReducers),
    EffectsModule.forFeature([CoreEffects]),
  ],
  declarations: [],
  providers: [
    SystemGraphql,
    ConfigService
  ]
})
export class CoreModule { }
