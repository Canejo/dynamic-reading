import { Component, OnInit, Input } from '@angular/core';
import { ISystemConfig } from 'src/app/core/shared/entity/system-config.entity';

@Component({
  selector: 'app-integration-pocket',
  templateUrl: './integration-pocket.component.html',
  styleUrls: ['./integration-pocket.component.scss']
})
export class IntegrationPocketComponent implements OnInit {

  @Input() systemConfig: ISystemConfig;

  constructor() { }

  ngOnInit() {
  }

}
