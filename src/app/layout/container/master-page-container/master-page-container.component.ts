import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectSystemConfig } from './../../../core/store/selectors/core.selector';
import { GetSystemConfig } from './../../../core/store/actions/core.actions';
import { ICoreState } from './../../../core/store/state/core.state';

@Component({
  selector: 'app-master-page-container',
  templateUrl: './master-page-container.component.html',
  styleUrls: ['./master-page-container.component.scss']
})
export class MasterPageContainerComponent implements OnInit {

  systemConfig$ = this.storeCore.pipe(select(selectSystemConfig));

  constructor(
    private storeCore: Store<ICoreState>
  ) { }

  ngOnInit() {
    this.storeCore.dispatch(new GetSystemConfig());
  }

}
