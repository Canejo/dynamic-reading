import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingComponent } from './button-loading.component';
import { UiCommonModule } from '../../ui-common.module';

describe('ButtonLoadingComponent', () => {
  let component: ButtonLoadingComponent;
  let fixture: ComponentFixture<ButtonLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UiCommonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
