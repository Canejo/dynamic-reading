import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectSystemConfig } from '../../../core/store/selectors/core.selector';
import { ICoreState } from '../../../core/store/state/core.state';
import { GetSystemConfig } from '../../../core/store/actions/core.actions';

@Component({
  selector: 'app-user-manager-container',
  templateUrl: './user-manager-container.component.html',
  styleUrls: ['./user-manager-container.component.scss']
})
export class UserManagerContainerComponent implements OnInit {

  systemConfig$ = this.storeCore.pipe(select(selectSystemConfig));

  constructor(
    private storeCore: Store<ICoreState>
  ) { }

  ngOnInit() {
    this.storeCore.dispatch(new GetSystemConfig());
  }

}
