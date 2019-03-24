import { AppModule } from './../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationPocketComponent } from './integration-pocket.component';
import { UserModule } from '../../user.module';

describe('IntegrationPocketComponent', () => {
  let component: IntegrationPocketComponent;
  let fixture: ComponentFixture<IntegrationPocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        UserModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
