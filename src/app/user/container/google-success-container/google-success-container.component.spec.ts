import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSuccessContainerComponent } from './google-success-container.component';

describe('GoogleSuccessContainerComponent', () => {
  let component: GoogleSuccessContainerComponent;
  let fixture: ComponentFixture<GoogleSuccessContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSuccessContainerComponent ]
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
