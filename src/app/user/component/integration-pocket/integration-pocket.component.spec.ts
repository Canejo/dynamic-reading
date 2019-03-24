import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationPocketComponent } from './integration-pocket.component';

describe('IntegrationPocketComponent', () => {
  let component: IntegrationPocketComponent;
  let fixture: ComponentFixture<IntegrationPocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationPocketComponent ]
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
