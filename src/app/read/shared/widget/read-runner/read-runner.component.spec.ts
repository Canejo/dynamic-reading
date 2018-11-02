import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRunnerComponent } from './read-runner.component';

describe('ReadRunnerComponent', () => {
  let component: ReadRunnerComponent;
  let fixture: ComponentFixture<ReadRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
