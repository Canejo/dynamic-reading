import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagerContainerComponent } from './user-manager-container.component';

describe('UserManagerContainerComponent', () => {
  let component: UserManagerContainerComponent;
  let fixture: ComponentFixture<UserManagerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
