import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageContainerComponent } from './master-page-container.component';
import { AppModule } from './../../../app.module';
import { LayoutModule } from '../../layout.module';

describe('MasterPageContainerComponent', () => {
  let component: MasterPageContainerComponent;
  let fixture: ComponentFixture<MasterPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        LayoutModule
      ]
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
