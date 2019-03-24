import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageContainerComponent } from './master-page-container.component';

describe('MasterPageContainerComponent', () => {
  let component: MasterPageContainerComponent;
  let fixture: ComponentFixture<MasterPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
