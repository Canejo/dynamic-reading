import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { configReducers } from './store/reducers/config.reducers';
import { ConfigEffects } from './store/effects/config.effects';
import { ConfigService } from './shared/service/config.service';
import { SystemGraphql } from './shared/graphql/query/system.graphql';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', configReducers),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  declarations: [],
  providers: [
    SystemGraphql,
    ConfigService
  ]
})
export class CoreModule { }
