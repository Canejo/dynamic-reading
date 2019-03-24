import { TestBed, async } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { AppModule } from './../../../app.module';
import { CoreModule } from '../../core.module';

describe('ConfigService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        CoreModule
      ]
    });
  }));

  it('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
