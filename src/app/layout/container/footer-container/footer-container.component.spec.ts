import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerComponent } from './footer-container.component';
import { LayoutModule } from '../../layout.module';

describe('FooterContainerComponent', () => {
  let component: FooterContainerComponent;
  let fixture: ComponentFixture<FooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
