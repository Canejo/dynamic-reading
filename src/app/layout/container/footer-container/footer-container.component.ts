import { Component, OnInit, Input } from '@angular/core';

import { ISystemConfig } from './../../../core/shared/entity/system-config.entity';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent implements OnInit {

  @Input() systemConfig: ISystemConfig;

  constructor() { }

  ngOnInit() {
  }

}
