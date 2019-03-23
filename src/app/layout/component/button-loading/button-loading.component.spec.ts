import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingComponent } from './button-loading.component';
import { LayoutModule } from '../../layout.module';

describe('ButtonLoadingComponent', () => {
  let component: ButtonLoadingComponent;
  let fixture: ComponentFixture<ButtonLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LayoutModule ]
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
