import { TestBed } from '@angular/core/testing';

import { ButtonLoadingService } from './button-loading.service';
import { UiCommonModule } from '../../../ui-common.module';

describe('ButtonLoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ UiCommonModule ]
    });
  });

  it('should be created', () => {
    const service: ButtonLoadingService = TestBed.get(ButtonLoadingService);
    expect(service).toBeTruthy();
  });
});
