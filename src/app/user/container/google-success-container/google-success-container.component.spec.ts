import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSuccessContainerComponent } from './google-success-container.component';
import { AppModule } from './../../../app.module';
import { UserModule } from '../../user.module';

describe('GoogleSuccessContainerComponent', () => {
  let component: GoogleSuccessContainerComponent;
  let fixture: ComponentFixture<GoogleSuccessContainerComponent>;

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
    fixture = TestBed.createComponent(GoogleSuccessContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
