import { LayoutModule } from './../../../layout.module';
import { TestBed } from '@angular/core/testing';

import { ButtonLoadingService } from './button-loading.service';

describe('ButtonLoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LayoutModule ]
    });
  });

  it('should be created', () => {
    const service: ButtonLoadingService = TestBed.get(ButtonLoadingService);
    expect(service).toBeTruthy();
  });
});
