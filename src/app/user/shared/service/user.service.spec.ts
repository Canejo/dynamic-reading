import { TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { AppModule } from './../../../app.module';
import { UserModule } from '../../user.module';

describe('UserService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        UserModule
      ]
    });
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
