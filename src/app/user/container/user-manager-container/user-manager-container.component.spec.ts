import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../../app.module';
import { UserModule } from '../../user.module';
import { UserManagerContainerComponent } from './user-manager-container.component';

describe('UserManagerContainerComponent', () => {
  let component: UserManagerContainerComponent;
  let fixture: ComponentFixture<UserManagerContainerComponent>;

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
    fixture = TestBed.createComponent(UserManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
